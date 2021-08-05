import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';


const FormText = (props: any) => {
    const { cor } = props;
    const { tamanho } = props;
    const { border } = props;
    const { texto } = props;
    const { alinhamento } = props;
    const {margintop} = props;
    const {marginbottom} = props;

    return (
        <View style={{alignItems:alinhamento, marginTop: margintop, marginBottom: marginbottom}}>
            <Text style={
                {
                    color: cor,
                    fontSize: tamanho,
                    borderColor: 'rgba(0,0,0,0.2)',
                }} >{texto}</Text>
        </View>

    )
}



export default FormText;