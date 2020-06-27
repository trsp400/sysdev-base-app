import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    margin-bottom: -60px;
`;

export const Form = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS == 'ios',
    behavior: 'padding'
})`
    align-self: stretch;
    margin-top: 50px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 0px;
`;

export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 20px;
`;

export const ForgotPasswordText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;