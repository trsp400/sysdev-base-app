import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Email } from './styles';

const UserList = ({ data }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Left>
          <Avatar
            source={{
              uri: data.avatar
                ? data.avatar
                : `https://ui-avatars.com/api/?name=${
                    data.name.split(' ')[0]
                  }+${data.name.split(' ')[1]}`,
            }}
          />
          <Info>
            <Name>{data.name}</Name>
            <Email>{data.email}</Email>
          </Info>
        </Left>

        <TouchableOpacity onPress={() => {}}>
          <Icon name="settings" size={20} color="#ddd" />
        </TouchableOpacity>
      </Container>
    </TouchableOpacity>
  );
};

export default UserList;
