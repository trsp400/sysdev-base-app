import styled from 'styled-components/native';
import { SearchBar, Button } from 'react-native-elements';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 25px;
  margin-bottom: 20px;
  color: #363636;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  componentContainerStyle: { padding: 30 },
})``;

export const SearchUser = styled(SearchBar).attrs({
  inputStyle: {
    backgroundColor: '#eee',
    // height: 55
    width: 500,
  },
  containerStyle: {
    backgroundColor: '#eee',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    height: 60,
    width: 255,
  },
  leftIconContainerStyle: {
    backgroundColor: '#eee',
  },
  leftContainerStyle: { backgroundColor: '#eee' },
  platform: 'android',
})``;

export const Footer = styled.View`
  display: flex;
  /* flex: 1; */
  width: 300px;
  /* justify-content: space-between; */
  flex-direction: row;
`;
export const NewUser = styled(Button).attrs({
  buttonStyle: {
    backgroundColor: '#268030',
    display: 'flex',
    alignSelf: 'flex-end',
    padding: 10,
    marginTop: 19,
    // margin: 10,
  },
  containerStyle: {},
})`
  align-self: center;
  color: #000;
`;
