import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import ModalComponent from '../modal/modal-confirmacao-jogo';
import FormText from '../textos/TextComponent';


const Cartela = (props: any) => {
    const [apostas, setAposta] = useState<number[]>([]);
    const { apostar } = props
    const { navigation } = props
    const [touch, setTouch] = useState(getTouch());
    const [open, setOpen] = useState(false);
    const [showJogos, setShowJogos] = useState(true);

    const linha = ['01', '02', '03', '04', '05'];
    const linha1 = ['06', '07', '08', '09', '10'];
    const linha2 = ['11', '12', '13', '14', '15'];
    const linha3 = ['16', '17', '18', '19', '20'];
    const linha4 = ['21', '22', '23', '24', '25'];
    const linha5 = ['26', '27', '28', '29', '30'];
    const linha6 = ['31', '32', '33', '34', '35'];
    const linha7 = ['36', '37', '38', '39', '40'];
    const linha8 = ['41', '42', '43', '44', '45'];
    const linha9 = ['46', '47', '48', '49', '50'];
    const linha10 = ['51', '52', '53', '54', '55'];
    const linha11 = ['56', '57', '58', '59', '60'];
    const linha12 = ['61', '62', '63', '64', '65'];
    const linha13 = ['66', '67', '68', '69', '70'];
    const linha14 = ['71', '72', '73', '74', '75'];
    const linha15 = ['76', '77', '78', '79', '80'];



    const listItems = linha.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems1 = linha1.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems2 = linha2.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems3 = linha3.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems4 = linha4.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems5 = linha5.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems6 = linha6.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );


    const listItems7 = linha7.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );


    const listItems8 = linha8.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems9 = linha9.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems10 = linha10.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems11 = linha11.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems12 = linha12.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems13 = linha13.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    const listItems14 = linha14.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );


    const listItems15 = linha15.map((number: any) =>
        <TouchableOpacity style={touch[Number(number) - 1] ? styles.bt_press : styles.bt}
            key={number}
            onPress={() => selecao(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    );

    function getTouch() {
        let listTouch = [];
        for (var i = 1; i < 81; i++) {
            listTouch.push(false)
        }
        return listTouch;
    }

    function selecao(numero: string) {
        const num = Number(numero);
        const aposta = apostas?.find(a => a == num);
        if (apostas.length >= 20 && aposta === undefined) {
            abrirModal();
        } else {
            if (!aposta) {
                let items = [...apostas];
                items.push(num);
                setAposta(items);
                setarSelecao(true, numero);
            } else {
                apostas.splice(apostas.indexOf(num), 1);
                setarSelecao(false, numero);
            }
        }

    }

    function setarSelecao(valor: boolean, numero: any) {
        let items = [...touch];
        let item = items[Number(numero) - 1];
        item = valor;
        items[Number(numero) - 1] = item;
        setTouch(items);
    }

    function voltar(valor: any) {
        setShowJogos(true);
        setOpen(valor);
    }


    function abrirModal() {
        setShowJogos(false)
        setOpen(true)
    }

    function renderModal() {
        let descricao = "Deseja confirmar a aposta?"
        if (open) {
            return (
                <ModalComponent
                    open={open}
                    descricao={descricao}
                    apostas={apostas}
                    metodo={apostar}
                    voltar={voltar}
                    textBotton="Confirmar">
                </ModalComponent >
            )
        }
    }

    function renderJogos() {
        if (showJogos) {
            return (
                <View style={styles.container}>
                    <FormText
                        cor={'#006400'}
                        tamanho={16}
                        alinhamento={'center'}
                        marginBottom={10}
                        texto={'ESCOLHA 20 NUMEROS.'}
                    />
                    <View style={styles.botoes}>{listItems}</View>
                    <View style={styles.botoes}>{listItems1}</View>
                    <View style={styles.botoes}>{listItems2}</View>
                    <View style={styles.botoes}>{listItems3}</View>
                    <View style={styles.botoes}>{listItems4}</View>
                    <View style={styles.botoes}>{listItems5}</View>
                    <View style={styles.botoes}>{listItems6}</View>
                    <View style={styles.botoes}>{listItems7}</View>
                    <View style={styles.botoes}>{listItems8}</View>
                    <View style={styles.botoes}>{listItems9}</View>
                    <View style={styles.botoes}>{listItems10}</View>
                    <View style={styles.botoes}>{listItems11}</View>
                    <View style={styles.botoes}>{listItems12}</View>
                    <View style={styles.botoes}>{listItems13}</View>
                    <View style={styles.botoes}>{listItems14}</View>
                    <View style={styles.rodape}>{listItems15}</View>
                </View>
            )
        } else {
            return null;
        }

    }


    return (
        <>
            {renderModal()}
            {renderJogos()}

        </>
    );

}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 0,
        flexDirection: 'column',
    },

    bt: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
    },

    bt_press: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#665ee2',
        borderRadius: 50,
    },

    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        height: 45,
        marginBottom: 9,
        marginLeft: 2
    },

    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        height: 45,
        marginBottom: 30,
    },

    submit: {
        width: '100%',
        height: 45,
        alignItems: 'center',
        backgroundColor: '#4682B4',
        marginBottom: '5%'
    },

    ok: {
        fontSize: 16,
        color: 'white',

    },

    message: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
});

export default Cartela;
