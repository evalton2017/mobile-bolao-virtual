import React, { useRef } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import ButtonComponent from '../botoes/buttom-component';


const ModalComponent = (props: any) => {
    const { apostas } = props;
    const { metodo } = props;
    const { open } = props;
    const { voltar } = props;
    const { textBotton } = props;
    const { descricao } = props;
    const modalizeRef = useRef<Modalize>(null);

    function fechar() {
        voltar(false)
    }

    function renderApostas() {
        const numeros = ordenarlinsta(apostas);
        let numeros1: number[] = [];
        let numeros2: number[] = [];
        let numeros3: number[] = [];
        let numeros4: number[] = [];
        let count = 0;

        numeros.forEach((ap: number) => {
            if (count < 5) {
                numeros1.push(ap)
            }
            if (count >= 5 && count < 10) {
                numeros2.push(ap)
            }

            if (count >= 10 && count < 15) {
                numeros3.push(ap)
            }

            if (count >= 15 && count < 20) {
                numeros4.push(ap)
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
            <View style={styles.jogos}>
                <View style={styles.botoes}>{n1}</View>
                <View style={styles.botoes}>{n2}</View>
                <View style={styles.botoes}>{n3}</View>
                <View style={styles.botoes}>{n4}</View>
            </View>
        )
    }
    
    function ordenarlinsta(list: number[]){
        return list.sort((a:number,b: number) => a-b);
    }

    function apostar(){
        metodo(apostas);
        fechar();                
    }

    function renderModal() {
        if (open) {
            return (
                <>
                    {renderApostas()}
                    <View style={styles.centeredView}>
                        <Modal animationType="slide"
                            visible={open}
                            transparent={true}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.text}>{descricao}</Text>
                                    <ButtonComponent
                                        metodo={apostar}
                                        texto={textBotton}
                                        cor='#006400'
                                    />
                                    <ButtonComponent
                                        metodo={fechar}
                                        texto="Voltar"
                                        cor='#006400'
                                    />
                                </View>
                            </View>

                        </Modal>

                    </View>

                </>)
        }

    }

    return <View>
        {renderModal()}
    </View>
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 0,
        flexDirection: 'column',
        backgroundColor: '#208040'
    },

    jogos_aposta: {
        paddingBottom: 0,
        flexDirection: 'column',
        backgroundColor: '#FFD700'
    },

    jogos: {
        paddingBottom: 0,
        flexDirection: 'column',
        backgroundColor: '#006400',

    },

    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        height: 45,
        marginBottom: 9,
        marginLeft: 2
    },

    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: '50%'
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
        elevation: 5,
        width: '90%',
        height: '50%'
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
});


export default ModalComponent;
