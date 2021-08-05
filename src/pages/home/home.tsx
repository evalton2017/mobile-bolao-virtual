import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Platform, ActivityIndicator, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import AuthContext from '../../context/authContext';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import envs from '../../config/env';
import FormText from '../../components/textos/TextComponent';
import Apostas from '../../components/jogos/apostas';
import ButtonComponent from '../../components/botoes/buttom-component';

export const URL = Platform.OS === 'android' ?
    `${envs.APP_API_URL_LOCAL}` : `${envs.APP_API_URL}`


type ParamList = {
    params: {
        loading: boolean;
    };
};


export const HomePage: React.FC = () => {
    let { t, i18n } = useTranslation('home');
    const [isLoad, setIsLoad] = useState(false);
    const { signIn, logado, user, logout } = useContext(AuthContext);
    const [jogos, setJogos] = useState<any>([]);
    const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'params'>>();

    useEffect(() => {
        buscarJogos();
    }, [])

    useEffect(() => {
        buscarJogos();
    }, [route.params])

    async function buscarJogos() {
        setIsLoad(true)
        const response = await axios.post(`${URL}apostas/consultar/${user?.user.email}`);
        if (response.data) {
            setIsLoad(false);
            setJogos(response.data);
        }
    }

    function sair() {
        logout();
        navigation.navigate(`${t('nav_login')}`);
    }

    function apostar() {
        navigation.navigate(`${t('nav_jogo')}`);
    }

    function loading() {
        if (isLoad)
            return <ActivityIndicator color="blue" size="large" />
    }


    function renderListEmpty() {
        if (jogos.length == 0) {
            return <FormText
                cor={'#006400'}
                tamanho={16}
                alinhamento={'center'}
                marginBottom={10}
                texto={'NENHUM JOGO ENCONTRADO.'}
            />
        } else {
            return null;
        }
    }

    return (
        <View style={styles.container}>
            <Card>
                <FormText
                    cor={'#2e0ab1'}
                    tamanho={16}
                    alinhamento={'center'}
                    marginBottom={2}
                    texto={'BEM VINDO AO BOLÃO VIRTUAL'}
                />

                <ButtonComponent
                    metodo={apostar}
                    texto={'   APOSTAR   '}
                    marginBottom={5}
                    cor={'#2908a0'}
                    largura={300}
                    altura={40}
                />

                <ButtonComponent
                    metodo={sair}
                    texto={'   SAIR   '}
                    marginBottom={5}
                    cor={'#2908a0'}
                    largura={300}
                    altura={40}
                />
            </Card>
            {loading()}
            <FlatList
                data={jogos}
                keyExtractor={(jogo) => `${jogo.id}`}
                onEndReachedThreshold={0.25}
                ListEmptyComponent={renderListEmpty}
                renderItem={({ item }) => (
                    <Apostas
                        apostas={item.numeros}
                    />
                )} />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        height: '100%'
    }
});

