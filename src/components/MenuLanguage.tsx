import React, { useState } from 'react';
import { Image } from 'react-native-elements';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';


const MenuLanguageComponent = (props: any) => {

  let { t, i18n } = useTranslation('login');
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => alterarIdioma()}  >
        <Image
          source={require('../../assets/idiomas.jpg')}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>
      {renderBandeiras()}
    </View>
  );

  function alterarIdioma() {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  function renderBandeiras() {
    if (show) {
      return (
        <>
          <TouchableOpacity onPress={() => portugues()}  >
            <Image
              source={require('../../assets/brasil.jpg')}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => ingles()}  >
            <Image
              source={require('../../assets/usa.jpg')}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => frances()}  >
            <Image
              source={require('../../assets/franca.png')}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
        </>
      )
    }
  }

  function portugues() {
    i18n.changeLanguage('pt-BR')
    setShow(false);
  }

  function ingles() {
    i18n.changeLanguage('en-US')
    setShow(false);
  }

  function frances() {
    i18n.changeLanguage('fr-FR')
    setShow(false);
  }


}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'flex-start',
    marginTop: 15,
    paddingLeft: '80%',
    marginLeft: 10,
  },
  bt: {
    alignItems: 'center',

  }

});

export default MenuLanguageComponent;