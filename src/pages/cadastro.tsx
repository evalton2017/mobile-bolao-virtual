import React from 'react';
import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import axios from 'axios';
import FormRow from '../components/FormRow';
import { Button, Input, Icon } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import FormInput from '../components/textos/FormInput';
import { withTranslation } from 'react-i18next';
import envs from '../config/env';

interface IProps {
    navigation: NavigationScreenProp<any, any>;
    t: any
}

export const URL = Platform.OS === 'android' ?
    `${envs.APP_API_URL_LOCAL}`:`${envs.APP_API_URL}`

class CadastroPage extends React.Component<IProps, any> {
    

    constructor(props: any) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            password: '',
            isLoad: false,
            mensagem: '',
        }
    }

    onChangeInput(field: any, value: any) {
        this.setState({
            [field]: value
        })
    }

    cadastrar() {
        this.setState({ isLoad: true })
        try {
            let user = this.state;
            if ((user.email == '') || (user.nome == '') || (user.password == '')) {
                this.setState({ isLoad: false })
                this.setState({ mensagem: `${this.props.t('erro_nm_obrigatorio')}` });
                return;
            }
            if (!user.email.includes('@')) {
                this.setState({ isLoad: false })
                this.setState({ mensagem: `${this.props.t('email_invalido')}` });
                return;
            }

            axios.post(`${URL}login/createUser`, this.state)
                .then((result) => {
                    this.setState({ isLoad: false })
                    this.setState({ mensagem: `${this.props.t('sucesso_cadastro')}` });
                    this.encaminhar(`${this.props.t('nav_login')}`);
                }).catch((error) => {
                    this.setState({ isLoad: false });
                    this.setState({ mensagem: `${this.props.t('erro_cadastro')}` });
                });
        } catch (error) {
            this.setState({ isLoad: false });
        }
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
                icon={
                    <Icon
                        name="address-card"
                        type='font-awesome'
                        size={15}
                        color="white"
                    />
                }
                onPress={() => this.cadastrar()}
                title={this.props.t('bt_cadastrar')}>
            </Button>

        );
    }


    render() {

        return (
            <View style={styles.container}>
                <FormRow>
                    <Input
                        placeholder= {this.props.t('nm_usuario')}
                        leftIcon={{ type: 'font-awesome', name: 'user' }}
                        value={this.state.nome}
                        onChangeText={value => this.onChangeInput('nome', value)}
                    />

                    <Input
                        placeholder= {this.props.t('email_usuario')}
                        value={this.state.email}
                        leftIcon={{ type: 'font-awesome', name: 'at' }}
                        onChangeText={value => this.onChangeInput('email', value)}
                    />

                    <FormInput
                        placeholder= {this.props.t('senha_usuario')}
                        secureTextEntry={true}
                        leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                        value={this.state.password}
                        onChangeText={(value: any) => this.onChangeInput('password', value)}
                    />


                    {this.renderButton()}
                </FormRow>

                {this.renderMessage()}
            </View>
        )
    }
}


export default withTranslation('cadastro')(CadastroPage)

const styles = StyleSheet.create({

    container: {
        flex: 0.8,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 30,
        justifyContent: 'center',
    },

    opcoesTextoI: {
        paddingLeft: 25,
        fontSize: 15,
    },

    opcoesTexto: {
        paddingRight: 25,
        fontSize: 15,
    },

    message: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
});
