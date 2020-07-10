/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Title, Form, FormInput, SubmitButton, Avatar } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOut());
  };

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={{ marginHorizontal: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Title>Perfil</Title>
              <TouchableOpacity onPress={handleLogout}>
                <Icon
                  name="close"
                  size={30}
                  color="black"
                  style={{ marginTop: 30 }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ width: 80, height: 80, alignSelf: 'center' }}
            >
              <Avatar
                source={{ uri: 'https://api.adorable.io/avatar/200/sysdev' }}
              />
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
                icon="info"
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
                icon="date-range"
                autoCorret={false}
                keyboardType="numeric"
                autoCapitalize="none"
                placeholder="Data de nascimento"
                returnKeyType="next"
                onPress={showDatepicker}
                onSubmitEditing={showDatepicker}
                // ref={emailRef}
                // returnKeyType="next"
                // value={email}
                // onChangeText={ setEmail }
              />
              {show && (
                <DateTimePicker
                  style={{ flex: 1, zIndex: 999 }}
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour
                  display="spinner"
                  onChange={onChange}
                />
              )}
              <FormInput
                icon="phone"
                autoCorret={false}
                autoCapitalize="none"
                placeholder="Telefone"
                keyboardType="phone-pad"
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
                keyboardType="phone-pad"
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

              <LinearGradient
                colors={['#7a1fa0', '#7542ff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <SubmitButton onPress={showDatepicker}>
                  Atualizar Perfil
                </SubmitButton>
              </LinearGradient>
            </Form>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
