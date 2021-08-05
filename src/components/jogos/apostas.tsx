import React, { useRef } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

const Apostas = (props: any) => {
    const { apostas } = props;
    const {metodo} = props;
    const { textBotton } = props;
    const { descricao } = props;


    function renderApostas() {
        let numeros1: number[] = [];
        let numeros2: number[] = [];
        let numeros3: number[] = [];
        let numeros4: number[] = [];
        let count = 0;

        if (apostas.length == 0) {
            return (
                <Text>Nenhuma aposta realizada para o período.</Text>
            )
        }

        apostas.forEach((ap: any) => {
            if (count < 5) {
                numeros1.push(ap.numero)
            }
            if (count >= 5 && count < 10) {
                numeros2.push(ap.numero)
            }

            if (count >= 10 && count < 15) {
                numeros3.push(ap.numero)
            }

            if (count >= 15 && count < 20) {
                numeros4.push(ap.numero)
            }
            count++
        })

        const n1 = numeros1.map((number: any) =>
            <TouchableOpacity style={styles.numeros}
                key={number}>
                <Text>{number}</Text>
            </TouchableOpacity>

        );

        const n2 = numeros2.map((number: any) =>
            <TouchableOpacity style={styles.numeros}
                key={number}>
                <Text>{number}</Text>
            </TouchableOpacity>
        );

        const n3 = numeros3.map((number: any) =>
            <TouchableOpacity style={styles.numeros}
                key={number}>
                <Text>{number}</Text>
            </TouchableOpacity>
        );

        const n4 = numeros4.map((number: any) =>
            <TouchableOpacity style={styles.numeros}
                key={number}>
                <Text>{number}</Text>
            </TouchableOpacity>
        );

        return (
            <Card>
                <View style={styles.topo}>
                    <View style={styles.botoes}>{n1}</View>
                    <View style={styles.botoes}>{n2}</View>
                    <View style={styles.botoes}>{n3}</View>
                    <View style={styles.botoes}>{n4}</View>
                </View>
            </Card>
        )
    }

    return (
        <View>
            {renderApostas()}
        </View>
    )
};

const styles = StyleSheet.create({
    topo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 4,
        marginBottom: 5,
        backgroundColor: '#a3c7f0'
    },

    numeros: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
    },

    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: '5%'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    lineText: {
        fontSize: 20,
        paddingLeft: 2,
        fontWeight: 'bold'
    },

    titulo: {
        color: "#1a1e9d",
        fontSize: 22
    },
    bt: {
        paddingTop: 10,
        alignItems: 'center',
        backgroundColor: '#2908a0',
    },

    text: {
        paddingTop: 20,
        color: "#1a1e9d",
        fontSize: 18,
    }
});


export default Apostas;
