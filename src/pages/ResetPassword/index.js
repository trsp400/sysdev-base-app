import  React, { useRef, useState } from 'react';
import { Image, Text, Alert, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import logo from "~/assets/logo.png";
import Sysdev from '~/components/sysdev/index';
import { Container, Form, FormInput, SubmitButton, ForgotPassword ,ForgotPasswordText } from './styles';
import Background from '~/components/Background';

import api from '~/services/api';

const ResetPassword = ({ navigation }) => {

    const confirmPasswordRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSysdev = () => {
        
    }

    const handleSubmit = async () => {
        setLoading(true);

        if (password.length < 6) {
            Alert.alert('Erro nas informações!','Sua senha deve ter no mínimo 6 caracteres!');
            setLoading(false);
            return;
        }

        if (confirmPassword != password) {
            Alert.alert('Erro nas informações!','A confirmação de senha está diferente da senha!');
            setLoading(false);
            return;
        }

        const put = await api.put('/resetpass', {
            cpf,
            email, 
            password,
            confirmPassword
        })
        .then( res => {
            setLoading(false);
            Alert.alert('Senha Alterada com sucesso!', 'Faça o login com ela.');
            navigation.navigate('SignIn');
        })
        .catch( err => {
            Alert.alert('Houve um erro nas suas informações, verifique seus dados!')
            console.log(err);
            setLoading(false);
        });                
    }

    return(      
        <Background onPress={Keyboard.dismiss}>            
            <Container >
                <Image source={logo} />
                <Text style={{ fontSize: 20, marginTop: 15, marginBottom: -35, color: "#FFF" }}>Redefina sua Senha</Text>
                <Form>
                    <FormInput 
                        icon="person" 
                        autoCorret={false} 
                        keyboardType="numeric"
                        autoCapitalize="none" 
                        placeholder="CPF" 
                        returnKeyType="next"                         
                        onSubmitEditing={ () => emailRef.current.focus() }
                        value={cpf}
                        onChangeText={ setCpf}
                    />
                    <FormInput 
                        icon="email" 
                        autoCorret={false}
                        autoCapitalize="none"
                        placeholder="Digite o e-mail de sua conta" 
                        onSubmitEditing={ () => passwordRef.current.focus() }
                        ref={emailRef}
                        returnKeyType="next"
                        value={email}
                        onChangeText={ setEmail }
                    />
                    <FormInput 
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Nova Senha" 
                        onSubmitEditing={ () => confirmPasswordRef.current.focus() }
                        ref={passwordRef}
                        value={password}
                        returnKeyType="next"
                        onChangeText={ setPassword }
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Confirmar Senha" 
                        ref={confirmPasswordRef}
                        value={confirmPassword}
                        returnKeyType="send"
                        onChangeText={ setConfirmPassword }
                    />
                    <LinearGradient colors={['#7a1fa0', '#7542ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} ><SubmitButton loading={loading} onPress={ handleSubmit } >Mudar a Senha</SubmitButton></LinearGradient>    
                </Form>
                
                <ForgotPassword onPress={ () => navigation.navigate('SignIn') } >
                    <ForgotPasswordText>Realizar Login</ForgotPasswordText>
                </ForgotPassword>
                
            </Container>

            <HideWithKeyboard>
                <Sysdev/>
            </HideWithKeyboard>
            
        
        </Background>
        
    );
}

export default ResetPassword;