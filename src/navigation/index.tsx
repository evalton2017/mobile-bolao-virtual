import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native'
import AuthContext from '../context/authContext';
import AppRoutes from './app.routes';

import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    const { logado, loading, user } = useContext(AuthContext);
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#999" />
            </View>
        )
    }
    return logado ? <AppRoutes /> : <AuthRoutes />
};

export default Routes;
