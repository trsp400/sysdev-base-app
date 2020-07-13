import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;
export const Descriptions = styled.View`
  margin-left: 10px;
  flex-direction: column;
`;
export const DescriptionName = styled.Text`
  font-size: 30px;
`;
export const DescriptionLocation = styled.Text`
  font-size: 15px;
`;

export const Avatar = styled.Image`
  flex-direction: column;
  margin-right: 10px;
  width: 60px;
  height: 60px;
  border-width: 2px;
  border-color: black;
  border-radius: 30px;
`;
