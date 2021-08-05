import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header  = (props: any) => {
    const {children} = props
    return(
        <View style={styles.container}>
           <Text style={styles.title}>Header</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        marginTop: 25,
        backgroundColor: '#6200ee'
    },
    title:{
        fontSize: 30,
        color:  '#fff'
    }

});

export default  Header;