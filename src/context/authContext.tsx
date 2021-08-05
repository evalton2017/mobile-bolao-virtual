import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useTranslation } from 'react-i18next';
import envs from '../config/env';
import * as Google from "expo-google-app-auth";
import firebase from '../config/firebase-auth';

const IOS_CLIENT_ID = envs.IOS_CLIENT_ID
const ANDROID_CLIENT_ID = envs.ANDROID_CLIENT_ID

interface UserContext{
    logado?: boolean;
    user?: User | null;
    signIn(user: User, callback: any): Promise<any>;
    logout(): void;
    logarGoogle(callback: any): Promise<any>;
    loading: boolean;
}

interface User {
    email?: string;
    uid?: string;
    token?: string
    foto?: string;
    accessToken?: string;
    user?: any
}

export const URL = Platform.OS === 'android' ?
    `${envs.APP_API_URL_LOCAL}`:`${envs.APP_API_URL}`

const AuthContext = createContext<UserContext>({} as UserContext);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    let { t, i18n } = useTranslation('login');

    useEffect(() => {
        async function loadStoragedData() {
            const storageUser = await AsyncStorage.getItem('@Auth_user');
            if (storageUser) {
                let useInfo = JSON.parse(storageUser);
                setUser(JSON.parse(storageUser));
                axios.defaults.headers.Authorization = `Bearer ${useInfo?.user?.stsTokenManager.accessToken}`;
            }
        }
        loadStoragedData();
    }, []);

    async function signIn(usuario: any, callback: any) {
        try {
            let response = await axios.post(`${URL}login`, usuario);
            if(response){
                setUser(response.data);
                const retorno = response.data;
                axios.defaults.headers['Authorization'] = `Bearer ${retorno?.user?.stsTokenManager.accessToken}`;
                AsyncStorage.setItem('@Auth_user', JSON.stringify(retorno));  
                const storageUser = await AsyncStorage.getItem('@Auth_user');
                if(storageUser){
                    callback(retorno);
                }           
            }       
        } catch (error) {
            console.log('Error')
            console.log(error)
            let erro = `${t('response_usuario_invalido')}`;
            callback(erro);
        }
    }

    async function logarGoogle(callback: any) {
        try {
            const result = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                iosClientId: IOS_CLIENT_ID,
                scopes: ["profile", "email"]
            });
            if (result.type === "success") {
                firebase.sincronizarFirebase(result, (usuario: any) => {   
                    if (usuario) {
                        setUser(usuario);
                        axios.defaults.headers['Authorization'] = `Bearer ${usuario.token}`;
                        AsyncStorage.setItem('@Auth_user', JSON.stringify(usuario));

                        AsyncStorage.getItem('@Auth_user')
                            .then((result)=>{
                                if(result){
                                    callback(result);
                                } 
                            })
                        
                    
                    }
                });
              
            } 
         
        } catch (e) {
            console.log(`${t('erro_sincrinizar_conta')}`, e);
            return { error: true };
        }
    }

    function logout() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider value={{ logado: !!user, user, signIn, logout, loading, logarGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
