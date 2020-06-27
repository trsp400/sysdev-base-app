import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('windows').width);
const screenHeight = Math.round(Dimensions.get('window').height)

const theme = {
    width: screenWidth- 740,
    height: screenHeight - 350
}

export const Container = styled.View`
    flex:1;
`;
export const DescriptionName = styled.Text`
    padding-top: ${theme.height}px;
`;