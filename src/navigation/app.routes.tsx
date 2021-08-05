import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import { HomePage } from '../pages/home/home';
import RedefinirSenha from '../pages/redefinir-senha';
import Loading from '../pages/loading';

import { useTranslation } from 'react-i18next';
import { Aposta } from '../pages/jogos/apostar';
import { Pagamento } from '../pages/jogos/pagamento';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {

    let { t } = useTranslation('navigation');

    return (< AppStack.Navigator >
        <AppStack.Screen name={t('login')} component={Login} />
        <AppStack.Screen name={t('cadastro')} component={Cadastro} />
        <AppStack.Screen name={t('home')} component={HomePage} />
        <AppStack.Screen name={t('apostar')} component={Aposta} />
        <AppStack.Screen name={t('pagamento')} component={Pagamento} />
        <AppStack.Screen name={t('redefinir_senha')} component={RedefinirSenha} />
        <AppStack.Screen name={t('loading')} component={Loading} />
    </AppStack.Navigator >
    );
}

export default AppRoutes;