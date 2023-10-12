import React, {memo} from 'react'
import {MuiTelInput} from 'mui-tel-input'

function PhoneNumbInput(props) {

    const {error, value, name, onChange, ...rest} = props;
    if (error) {
        rest.error = true;
        rest.helperText = error
    }


    return (
        <div>
            <MuiTelInput

                placeholder="Enter your phone number"
                className='input-style'
                value={value}
                // onChange={value => onChange({
                //     target: {
                //         value,
                //         name: 'phone'
                //     }
                // })}
                onChange={value => onChange(name, value)}
                // onChange={handleChange}
                // onChange={e => e.target.name, e.target.value}
                {...rest}
            />
        </div>
    )
}

export default memo(PhoneNumbInput);