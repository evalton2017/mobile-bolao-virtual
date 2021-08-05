import React, { useContext, useState } from 'react';
import { View, StyleSheet, Platform, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/authContext';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import envs from '../../config/env';
import Cartela from '../../components/jogos/Cartela';

export const URL = Platform.OS === 'android' ?
    `${envs.APP_API_URL_LOCAL}` : `${envs.APP_API_URL}`


export const Aposta: React.FC = () => {
    let { t, i18n } = useTranslation('home');
    const [isLoad, setIsLoad] = useState(false);
    const { signIn, logado, user, logout } = useContext(AuthContext);
    const navigation = useNavigation();

    function home() {
        logout();
        navigation.navigate(`${t('nav_home')}`);
    }

    async function apostar(apostas: any) {
        const numeros = ordenarlinsta(apostas);
        const aposta = { email: user?.user.email, apostas: numeros };
        setIsLoad(true);
        try{
            let response = await axios.post(`${URL}apostas/cadastrar`, aposta);
            if(response){       
                setIsLoad(false);
                navigation.navigate(`${t('nav_home')}`,{ params: true });
            }
        }catch(error){
            Alert.alert('Erro ao tentar cadastrar o jogo, tente novamente mais tarde.');
            setIsLoad(false);
        }
    }

    function ordenarlinsta(list: number[]){
        return list.sort((a:number,b: number) => a-b);
    }

    function renderCartela() {
        if (isLoad)
            return <ActivityIndicator
            color="blue"
            size="large" />
          return (  <ScrollView>
            <Cartela
                apostar={apostar}
                navigation={navigation}
            />               
        </ScrollView>)
    }

    return (
        <>
        <View style={styles.container} >
            {renderCartela()}
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '2%'
    },
    btn: {
        marginLeft: 10,
        bottom: 0
    },
    titulo: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlign: 'center',
        marginBottom: '2%'
    },
    message: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
});

