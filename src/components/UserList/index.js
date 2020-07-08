import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { TouchableOpacity } from 'react-native';

import { 
    Container,
    Left,
    Avatar,
    Info,
    Name,
    Email,    
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default UserList = ({ data }) => {

    return (
        <TouchableOpacity>
            <Container>
                <Left>                    
                    <Avatar source={{ uri: data.avatar ? data.avatar : `https://api.adorable.io/avatar/50/${data.name}` }}/>
                    <Info>
                        <Name>{data.name}</Name>
                        <Email>{data.email}</Email>
                    </Info>
                </Left>

                <TouchableOpacity onPress={() => {}}>
                    <Icon name='settings' size={20} color="#ddd" />
                </TouchableOpacity>

            </Container>
        </TouchableOpacity>
    )
}