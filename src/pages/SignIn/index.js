import  React, {  forwardRef,useState } from 'react';
import { Image, Text, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Background from '~/components/Background';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import '~/config/ReactotronConfig';
import logo from "~/assets/logo.png";
import Sysdev from '~/components/sysdev/index';
import { Container, Form, FormInput, SubmitButton, ForgotPassword ,ForgotPasswordText } from './styles';


import { put, call } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

const SignIn = ({navigation}) => {
    const passwordRef = forwardRef();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.auth.loading)
    // const [loading, setLoading] = useState(false);
    
    const handleSubmit = () => {
        dispatch( signInRequest(email, password) );
    }

    return(  
        <>    
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
                <HideWithKeyboard>
                    <Sysdev/>
                </HideWithKeyboard>
                
        </Background>  
        </>
    );
}

export default SignIn;