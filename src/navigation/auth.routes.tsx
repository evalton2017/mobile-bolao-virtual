import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import RedefinirSenha from '../pages/redefinir-senha';
import { useTranslation } from 'react-i18next';

const AuthLogin = createStackNavigator();

const AuthRoutes: React.FC = () => {

    let { t } = useTranslation('navigation');

    return (< AuthLogin.Navigator >
        <AuthLogin.Screen name={t('login')} component={Login} />
        <AuthLogin.Screen name={t('cadastro')} component={Cadastro} />
        <AuthLogin.Screen name={t('redefinir_senha')} component={RedefinirSenha} />
    </AuthLogin.Navigator >
    );
}

export default AuthRoutes;