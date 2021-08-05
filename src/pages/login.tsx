import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import FormRow from '../components/FormRow';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';
import AuthContext from '../context/authContext';

import 'react-native-gesture-handler';
import FormInput from '../components/textos/FormInput';
import { useTranslation } from 'react-i18next';
import MenuLanguageComponent from '../components/MenuLanguage';

const LoginPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const { logado, loading, user } = useContext(AuthContext);

    let { t, i18n } = useTranslation('login');


    const { signIn } = useContext(AuthContext);
    const navigation = useNavigation();

    useEffect(() => {
        async function verifyUserLoger() {
           if(user){
            navigation.navigate(`${t('nav_home')}`);
           }
        }
        verifyUserLoger();
    }, []);

    async function logar() {
        let usuario = { email, password };
        setIsLoad(true);
        if (validar(usuario)){
            await signIn(usuario, (response: any) => {
                if (response) {
                    if (response?.message == 'Email ou senha invalido.') {
                        setIsLoad(false);
                        setMensagem(`${t('response_usuario_invalido')}`);
                        limparMensagem();
                    } else {
                        navigation.navigate(`${t('nav_home')}`);
                    }
                }
            });
        }
  
    }

    function validar(usuario: any) {
        if (usuario.email == '' || usuario.password == '') {
            setIsLoad(false);
            let msg = `${t('ususario_obrigatorio')}`
            setMensagem(msg);
            limparMensagem();
            return false;
        }
        return true;
    }

    function cadastrar() {
        navigation.navigate(`${t('nav_cadastro')}`)
    }

    function redefinirSenha() {
        navigation.navigate(`${t('nav_redefinir_senha')}`)
    }

    function renderButton() {
        if (isLoad)
            return <ActivityIndicator
                color="blue"
                size="large" />
        return (
            <View style={styles.loginButtonSection}>
                <Button
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                    }
                    title={t('bt_acessar')}
                    onPress={() => logar()}   >
                </Button>
            </View>
        );
    }

    function renderMessage() {
        if (!mensagem)
            return null;
        return (
            <View style={styles.message}>
                <Text>{mensagem}</Text>
            </View>
        )
    }

    function limparMensagem() {
        setTimeout(() => {
            return setMensagem('');
        }, 4000);
    }

    return (
        <>
            <MenuLanguageComponent>

            </MenuLanguageComponent>
            <View style={styles.container}>
                <FormRow>

                    <FormInput
                        placeholder={t('placeholder_email_usuario')}
                        leftIcon={{ type: 'font-awesome', name: 'at' }}
                        value={email}
                        onChangeText={(value: any) => setEmail(value)}
                    />
                    <FormInput
                        placeholder={t('placeholder_senha_usuario')}
                        secureTextEntry={true}
                        leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                        value={password}
                        onChangeText={(value: any) => setPassword(value)}
                    />

                    {renderButton()}

                    <View style={styles.opcoes}>
                        <TouchableOpacity onPress={() => redefinirSenha()}  >
                            <Text style={styles.opcoesTexto}>{t('bt_redefinir_senha')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => cadastrar()}  >
                            <Text style={styles.opcoesTextoI}>{t('bt_cadastrar')}</Text>
                        </TouchableOpacity>
                    </View>

                    {renderMessage()}

                </FormRow>
            </View>
        </>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 30,
        justifyContent: 'center',
    },

    loginButtonSection: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
     },

    opcoes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    opcoesTextoI: {
        paddingLeft: 25,
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20
    },

    opcoesTexto: {
        paddingRight: 25,
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20
    },

    message: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20
    },
});

export default LoginPage;