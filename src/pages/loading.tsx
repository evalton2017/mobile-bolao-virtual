import React, { useState, useContext } from 'react';
import { Button, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const Loading: React.FC = () => {

    const [isLoad, setIsLoad] = useState(false);

    return (
        <Button
        title="Aguarde...."
        loading
        />
    )
}


export default Loading;