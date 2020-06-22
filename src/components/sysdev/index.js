import React from 'react';
import { View, Image, StyleSheet, Text,TouchableOpacity, Dimensions } from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

let margin = 0;
let marginWidth = 0;

import logo from '~/assets/logo-sysdev.png';

screenHeight <= 592 ? margin = screenHeight - 540 : margin = 10;
screenWidth <= 360 ? marginWidth = screenWidth -320 : marginWidth = 59; 


const styles = StyleSheet.create({
    container: {
        marginTop: margin  ,
        marginLeft: marginWidth,
        flexDirection: "row"
    },
    text : {
        marginLeft: 0,
        marginTop: 29
    }
});

const Sysdev = ({style, ...props}) => {

    const handlePress = () => {
        
    }

  return (
    <>
        <View  style={styles.container }>
            <TouchableOpacity>
                <Image source={logo}/>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.text}>
                <Text>Desenvolvido por Sysdev</Text>
            </TouchableOpacity>                      
        </View>        
    </>
  );
}

export default Sysdev;