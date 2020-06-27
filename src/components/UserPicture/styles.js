import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth  = Math.round(Dimensions.get('window').width);

const marginTop = screenHeight - 700;
const marginRight = screenWidth - 350;
const marginLeft = screenWidth - 350;

const theme = {
    marginTop: marginTop,
    marginRight: marginRight,
    marginLeft: marginLeft
}
export const Container = styled.View`
    flex: 1;
`;

export const Picture = styled.TouchableOpacity`    
    flex-direction: row;
    align-self: flex-end;
    margin-top: ${theme.marginTop}px;
    margin-right: ${theme.marginRight}px;
    width: 50px;
    max-width: 50px;
    height: 50px;
    border-radius: 25px;
    border-style: solid;
    border-width: 2px ;
    border-color: black;
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 45px;
    height:45px;
    border-radius: 22.5px;
`;
