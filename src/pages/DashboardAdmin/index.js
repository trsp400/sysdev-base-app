import React from 'react';
import { View, StatusBar, Text, Button } from 'react-native';
import Background from '~/components/Background';

import AsyncStorage from '@react-native-community/async-storage';

const DashboardAdmin =  () => {

    
    AsyncStorage.clear();
    const handlePress = () => {
       
    }

    return(
        <>
            <Background>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <View>
                    <Text style={{ margin: 50 }}>As informações dos usuários irão aparecer para o administrador aqui. Vão ter Abas para consultar e editar os usuários. O administrador poderá marcar que tal usuário recebeu ou não  a cesta basica.</Text>
                    <Button title='botão teste' onPress={ handlePress }><Text></Text></Button>
                </View>
                <StatusBar barStyle="dark-content" backgroundColor="#50a45a" />
            </Background>
        </>
    )
}



export default DashboardAdmin;