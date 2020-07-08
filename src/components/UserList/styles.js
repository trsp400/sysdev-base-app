import styled from 'styled-components/native';


export const Container = styled.View`
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 15px;
    padding: 25px;
    border-radius: 4px;
    background-color: #50a45a;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Left = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Info = styled.View`
    margin-left: 15px;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #333;
`;

export const Email = styled.Text`
    color: #333;
    font-size: 13px;
    margin-top: 4px;
`;
