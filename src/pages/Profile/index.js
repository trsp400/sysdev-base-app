import React from 'react';
import { TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, ScrollView } from 'react-native';

import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';


import {Title, Form, FormInput, SubmitButton, Avatar} from './styles';import { signOut } from '~/store/modules/auth/actions';
;

export default function Profile() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(signOut());
    }
    
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="height">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <ScrollView style={{marginHorizontal: 10}} showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Title>Perfil</Title>
                            <TouchableOpacity onPress={handleLogout} >
                                <Icon name="close" size={30} color="black" style={{marginTop: 30}}/>
                            </TouchableOpacity>                        
                        </View>
                        <TouchableOpacity style={{width: 80, height: 80, alignSelf: "center",}}>
                            <Avatar source={{ uri: "https://api.adorable.io/avatar/200/sysdev" }} /> 
                        </TouchableOpacity>
                        
                            <Form>
                                <FormInput 
                                    icon="person" 
                                    autoCorret={false}
                                    autoCapitalize="none" 
                                    placeholder="Nome Completo" 
                                    returnKeyType="next"                         
                                    // onSubmitEditing={ () => emailRef.current.focus() }
                                    // value={cpf}
                                    // onChangeText={ setCpf}
                                />
                                <FormInput 
                                    icon="email" 
                                    autoCorret={false}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    placeholder="E-mail"
                                    returnKeyType="next"
                                    // onSubmitEditing={ () => passwordRef.current.focus() }
                                    // ref={emailRef}
                                    // returnKeyType="next"
                                    // value={email}
                                    // onChangeText={ setEmail }
                                />
                                <FormInput 
                                    icon="email" 
                                    autoCorret={false}
                                    keyboardType="numeric"
                                    autoCapitalize="none"
                                    placeholder="CPF"
                                    returnKeyType="next"
                                    // onSubmitEditing={ () => passwordRef.current.focus() }
                                    // ref={emailRef}
                                    // returnKeyType="next"
                                    // value={email}
                                    // onChangeText={ setEmail }
                                />
                                <FormInput 
                                    icon="phone" 
                                    autoCorret={false}
                                    autoCapitalize="none"
                                    placeholder="Telefone"
                                    keyboardType="numeric"
                                    returnKeyType="next"
                                    // onSubmitEditing={ () => passwordRef.current.focus() }
                                    // ref={emailRef}
                                    // returnKeyType="next"
                                    // value={email}
                                    // onChangeText={ setEmail }
                                />
                                <FormInput 
                                    icon="phone-android" 
                                    autoCorret={false}
                                    keyboardType="numeric"
                                    autoCapitalize="none"
                                    placeholder="Celular(Com WhatsApp)" 
                                    returnKeyType="next"
                                    // onSubmitEditing={ () => passwordRef.current.focus() }
                                    // ref={emailRef}
                                    // returnKeyType="next"
                                    // value={email}
                                    // onChangeText={ setEmail }
                                />
                                <FormInput 
                                    icon="lock-outline"
                                    secureTextEntry
                                    placeholder="Senha antiga"
                                    returnKeyType="next" 
                                    // onSubmitEditing={ () => confirmPasswordRef.current.focus() }
                                    // ref={passwordRef}
                                    // value={password}
                                    // returnKeyType="next"
                                    // onChangeText={ setPassword }
                                />
                                <FormInput 
                                    icon="lock-outline"
                                    secureTextEntry
                                    placeholder="Nova Senha"
                                    returnKeyType="next"
                                    // onSubmitEditing={ () => confirmPasswordRef.current.focus() }
                                    // ref={passwordRef}
                                    // value={password}
                                    // returnKeyType="next"
                                    // onChangeText={ setPassword }
                                />
                                <FormInput
                                    icon="lock-outline"
                                    secureTextEntry
                                    placeholder="Confirmar Senha"
                                    returnKeyType="send"
                                    // ref={confirmPasswordRef}
                                    // value={confirmPassword}
                                    // returnKeyType="send"
                                    // onChangeText={ setConfirmPassword }
                                />

                                <LinearGradient colors={['#7a1fa0', '#7542ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
                                    <SubmitButton  >Atualizar Perfil</SubmitButton>
                                </LinearGradient>    
                            </Form>
                        
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

Profile.navigationOptions = {
    tabBarLabel: "Meu Perfil",
    tabBarIcon: ({tintColor}) => <Icon name="person" size={20} color={tintColor} />,
}