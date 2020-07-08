import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Title = styled.Text`
    font-size: 25px;
    margin-bottom: 20px;
    color: #363636;
    font-weight: bold;
    align-self: center;
    margin-top: 30px;
`;
export const Form = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS == 'ios',
    behavior: 'padding'
})`
    align-self: stretch;
    margin-top: 50px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 30px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 15px;
    background-color: #438a5e;
`;

export const SubmitButton = styled(Button)`
    margin-top: 0px;
    
`;

export const Avatar = styled.Image`
    align-self: center;
    margin-right: 10px;
    width: 80px;
    height: 80px;
    max-width: 80px;
    max-height: 80px;
    border-width: 2px;
    border-color: black;
    border-radius: 40px;
`;
