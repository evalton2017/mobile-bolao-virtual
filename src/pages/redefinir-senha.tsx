import React from 'react';
import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import axios from 'axios';
import FormRow from '../components/FormRow';
import { Button, Input } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import { withTranslation } from 'react-i18next';
import envs from '../config/env';

interface IProps {
    navigation: NavigationScreenProp<any, any>;
    t: any
}

export const URL = Platform.OS === 'android' ?
    `${envs.APP_API_URL}`:`${envs.APP_API_URL}`

class RedefinirSenha extends React.Component<IProps, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            isLoad: false,
            mensagem: ''
        }
    }

    onChangeInput(field: any, value: any) {
        this.setState({
            [field]: value
        })
    }

    renderMessage() {
        const { mensagem } = this.state;
        if (!mensagem)
            return null;
        return (
            <View style={styles.message}>
                <Text>{mensagem}</Text>
            </View>
        )
    }

    redefinirSenha() {
        this.setState({ isLoad: true })

        try {
            let valor = this.state;
            if (valor.email == '') {
                this.setState({ isLoad: false })
                this.setState({ mensagem: `${this.props.t('email_invalido')}` });
                return;
            }
            if (!valor.email.includes('@')) {
                this.setState({ isLoad: false })
                this.setState({ mensagem: `${this.props.t('email_invalido')}` });
                return;
            }

            axios.post(`${URL}reset/password/${valor.email}`)
                .then((result) => {
                    this.setState({ isLoad: false })
                    this.setState({ mensagem: `${this.props.t('msg_encaminhada')}:  ${valor.email}` });
                    this.encaminhar(`${this.props.t('nav_login')}`)
                }).catch((error) => {
                    this.setState({ isLoad: false });
                    this.setState({ mensagem: `${this.props.t('mg_erro_red_email')}` });
                });
        } catch (error) {
            this.setState({ isLoad: false })
            console.log(error);
        }
    }

    encaminhar(rota: any) {
        setTimeout(() => {
            this.props.navigation.navigate(rota);
        }, 2000);
    }

    renderButton() {
        if (this.state.isLoad)
            return <ActivityIndicator
                color="blue"
                size="large" />
        return (
            <Button
                onPress={() => this.redefinirSenha()}
                title= {this.props.t('bt_redefinir_senha')}>
            </Button>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FormRow>
                    <Input
                        placeholder= {this.props.t('email_usuario')}
                        value={this.state.email}
                        leftIcon={{ type: 'font-awesome', name: 'at' }}
                        onChangeText={value => this.onChangeInput('email', value)}
                    />
                    {this.renderButton()}
                </FormRow>
                {this.renderMessage()}
            </View>
        )
    }
}

export default withTranslation('redefinir_senha')(RedefinirSenha)

const styles = StyleSheet.create({

    container: {
        flex: 0.8,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 30,
        justifyContent: 'center',
    },

    message: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
});
