import React from 'react';
import { View, StatusBar, Text, Button } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const Dashboard =  () => {
    
    const handlePress = async () => {
        const auth = await AsyncStorage.getItem("persist:embaixada_do_bem")
        .then( res => {
            console.log(JSON.parse(res))
        })
        .catch( err => {
            console.log(err)
        });
    }

    
    

    return(
        <>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <View>
                <Text style={{ margin: 50 }}>joga boula</Text>
                <Button title='jogay' onPress={ handlePress }><Text></Text></Button>
            </View>
        </>
    )
}

export default Dashboard;