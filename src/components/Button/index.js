import React, {memo} from 'react';
import {default as ButtonMUI} from '@mui/material/Button';

const defaultProps = props => ({
    variant: 'contained',
    ...props
})

function Button (props) {
    //const propsAll = {...defaultProps(), ...props};
    //const propsAll = Object.assign(defaultProps(), props);
    const {children, ...propsAll} = defaultProps(props);

    return (
        <ButtonMUI{...propsAll}>
            {children}
        </ButtonMUI>
    )
}

export default memo(Button);