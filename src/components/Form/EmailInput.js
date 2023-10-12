import React, {memo} from 'react';
import {TextField} from "@mui/material";

function EmailReg(props) {
    const {error, ...rest} = props;
    if (error) {
        rest.error = true;
        rest.helperText = error
    }

    return (
        <TextField
            type='email'
            autoComplete='username'
            className='input-style'
            label="Email"
            variant="outlined"
            {...rest}
        />
    )
}


// createElement('TextField',  {
//     type: 'email',
//     autoComplete: 'username',
//rest: true
//     ...props
// })
export default memo(EmailReg)