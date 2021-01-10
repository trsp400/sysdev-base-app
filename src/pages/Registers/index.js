import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import UserList from '~/components/UserList';
import { Container, Title, List, SearchUser, Footer, NewUser } from './styles';

export default function Registers() {
  const [search, setSearch] = useState('');
  const [register, setRegister] = useState([]);

  useEffect(() => {
    const loadRegister = async () => {
      const response = await api.get('users');
      setRegister(response.data);
    };
    loadRegister();
  }, []);

  const updateSearch = value => {
    setSearch(value);
  };

  return (
    <Container>
      <Title>Usuários</Title>

      <List
        data={register}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <UserList data={item} />}
      />
      <Footer>
        <SearchUser
          placeholder="Pesquisar usuário"
          onChangeText={updateSearch}
          value={search}
        />
        <NewUser
          style={{ alignSelf: 'flex-end' }}
          title="Novo"
          icon={<Icon name="add" color="#ddd" size={20} />}
          iconRight
        />
      </Footer>
    </Container>
  );
}

Registers.navigationOptions = {
  tabBarLabel: 'Cadastros',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};
