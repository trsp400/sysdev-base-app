import React from 'react';

import { Container } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Contact () {
    return (
        <Container />
    );
}

Contact.navigationOptions= {
    tabBarLabel: "Contato",
    tabBarIcon: ({tintColor}) => <Icon name="contact-mail" size={20} color={tintColor} />
}