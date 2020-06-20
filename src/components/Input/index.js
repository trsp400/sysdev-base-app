import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, TInput } from './styles';

const Input = ({ style, icon, ...rest }, ref) => {
    return (
        <Container style={ style }>
            { Icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" ></Icon> }
            <TInput { ...rest } ref={ ref } />
        </Container>
    );
}

Input.PropTypes = {
    icon: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

Input.defaultProps = {
    icon: null,
    styles: {},
}


export default React.forwardRef(Input)