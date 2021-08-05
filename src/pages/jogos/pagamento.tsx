import React, { useContext, useState } from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Text, Input, Icon, } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/authContext';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import envs from '../../config/env';
import Cartela from '../../components/jogos/Cartela';

export const URL = Platform.OS === 'android' ?
    `${envs.APP_API_URL_LOCAL}` : `${envs.APP_API_URL}`

    
export const Pagamento: React.FC = () => {
    let { t, i18n } = useTranslation('home');

    const [corsel, setCorSel] = useState('#841584');
    const [corfull, setCorFull] = useState('#B0C4DE');
    const { signIn, logado, user, logout } = useContext(AuthContext);
    const navigation = useNavigation();

    function sair() {
        logout();
        navigation.navigate(`${t('nav_login')}`);
    }

    function selecionar(number: any) {
        console.log(number)
    }

    return (
        <View style={styles.container} >
            <Text style={styles.titulo}>ESCOLHA 20 NUMEROS</Text>
     
            <ScrollView>
                <Cartela
                    selecionar={selecionar}
                    navigation={navigation}
                />               
            </ScrollView>
        </View>
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

