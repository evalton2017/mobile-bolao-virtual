import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

const ButtonComponent = (props: any) => {
    const { metodo } = props;
    const { texto } = props;
    const { icone } = props;
    const {cor} = props;
    const {largura} = props;
    const {altura} = props;

    return <TouchableOpacity style={
            {
                borderRadius: 4,
                marginTop: 3,
                alignItems: 'center',
                backgroundColor: cor,
                width: largura,
                height: altura,
            }
        } 
        onPress={() => metodo()}   >
            <Text style={styles.titulo}>
                <Icon
                    name={icone}
                    size={20}
                    type='font-awesome'
                    color="white"
                />  
                  {texto} </Text>
        </TouchableOpacity>
};

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        height: '10%',
        width: '10%',
        paddingBottom:5,
        marginBottom: 5

    },

    titulo: {
        marginTop: 2,
        fontSize: 15,
        textAlign: 'center',
        width: '100%',
        fontWeight: 'bold',
        color: '#e4dede',
    }
    
});


export default ButtonComponent;