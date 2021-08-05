import React, { InputHTMLAttributes } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Input } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');

type IInputProps = InputHTMLAttributes<HTMLInputElement>;


  const FormInput = (props: any) => {
    return (
      <Input
        {...props}
      />
    )
  }

  const styles = StyleSheet.create({
    input: {
      marginTop: 10,
      marginBottom: 10,
      width: width / 1.5,
      height: height / 15
    }
  });

  export default FormInput;