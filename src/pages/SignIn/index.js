import  React, {  forwardRef,useState, useEffect } from 'react';
import { Image, Text, Animated, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Background from '~/components/Background';

import '~/config/ReactotronConfig';
import logo from "~/assets/logo.png";
import { Container, Form, FormInput, SubmitButton, ForgotPassword ,ForgotPasswordText } from './styles';

import { put, call } from 'redux-saga/effects';
import { useDispatch } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

const SignIn = ({navigation}) => {
    const passwordRef = forwardRef();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {

        setLoading(true);
        
        dispatch( signInRequest(email, password));
        setLoading(false);                 
    }

    return(      
        <Background >            
                <Container as={Animated.View} >
                    <Image source={logo} />
                    <Text style={{ fontSize: 20, marginTop: 15, marginBottom: -35, color: "#FFF" }}>Digite suas credenciais</Text>
                    <Form>
                        <FormInput 
                            icon="person" 
                            autoCorret={false} 
                            autoCapitalize="none" 
                            placeholder="Digite seu usuário ou e-mail" 
                            returnKeyType="next" 
                            onSubmitEditing={ () => passwordRef.current.focus() } 
                            value={email}
                            onChangeText={ setEmail }                            
                        />
                        <FormInput 
                            icon="lock-outline" 
                            secureTextEntry  
                            placeholder="Digite sua senha" 
                            ref={passwordRef}
                            returnKeyType="send"
                            onSubmitEditing={ handleSubmit }
                            value={password}
                            onChangeText={ setPassword }                            
                        />
                        
                        <LinearGradient colors={['#7a1fa0', '#7542ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} ><SubmitButton loading={loading} onPress={handleSubmit}  >Acessar</SubmitButton></LinearGradient>    
                    </Form>
                    
                    <ForgotPassword onPress={ () => {navigation.navigate('ResetPassword'); } }>
                        <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
                    </ForgotPassword>
                    
                </Container>  
        </Background>  
        
    );
}

export default SignIn;