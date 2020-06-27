import React from 'react';
import { Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");

import { Container, Picture, Avatar} from './styles';
import logo from "~/assets/logo.png";

const UserPicture = ({props}) => {
    
    return(        
        <Container>            
            <Picture>
                <Avatar source={logo} />            
            </Picture>
        </Container>
    );
}
// { uri: "https://api.adorable.io/avatar/50/" }

export default UserPicture;