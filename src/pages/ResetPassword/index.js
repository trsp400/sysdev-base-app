import  React, { useRef, useState, useEffect, useContext } from 'react';
import { Image, Text, ActivityIndicator, View, Alert, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import logo from "~/assets/logo.png";

import { Container, Form, FormInput, SubmitButton, ForgotPassword ,ForgotPasswordText } from './styles';

import Background from '~/components/Background';

const ResetPassword = ({ navigation }) => {

    const passwordRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');

    const [count, setCount] = useState(0)

    const handleSubmit = () => {
        Alert.alert('oiew')
    }

    return(      
        <Background >
            <Container>
                <Image source={logo} />
                <Text style={{ fontSize: 20, marginTop: 15, marginBottom: -35, color: "#FFF" }}>Redefina sua Senha</Text>
                <Form>
                    <FormInput 
                        icon="person" 
                        autoCorret={false} 
                        autoCapitalize="none" 
                        placeholder="CPF" 
                        returnKeyType="next" 
                        onSubmitEditing={ () => passwordRef.current.focus() } 
                        onChangeText={ text => setUser() }
                    />
                    <FormInput 
                        icon="email" 
                        placeholder="Digite o e-mail de sua conta" 
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={ handleSubmit }
                    />
                    <FormInput 
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Nova Senha" 
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={ handleSubmit }
                    />
                    <FormInput 
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Confirmar Senha" 
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={ handleSubmit }
                    />
                    <LinearGradient colors={['#7a1fa0', '#7542ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} ><SubmitButton title='' onPress={ handleSubmit } >Mudar a Senha</SubmitButton></LinearGradient>    
                </Form>
                
                <ForgotPassword onPress={ () => navigation.navigate('SignIn') }>
                    <ForgotPasswordText>Realizar Login</ForgotPasswordText>
                </ForgotPassword>
                
            </Container>            
        </Background>
        
    );
}

export default ResetPassword;