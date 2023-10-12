import * as React from 'react';
import InputPassword from "components/Form/InputPassword";

function RegPasswordInput(props) {
    const {errors, values, onChange} = props;

    const propsPassword = {};
    if(errors.password) {
        propsPassword.error = true;
        propsPassword.helperText = errors.password;
    }

    const propsConfirmPassword = {};
    if(errors.confirmPassword) {
        propsConfirmPassword.error = true;
        propsConfirmPassword.helperText = errors.confirmPassword;
    }

    return (
        <>
            <InputPassword
                value={values.password}
                name='password'
                onChange={onChange}
                label="Password"
                {...propsPassword}
            />
            <InputPassword
                value={values.confirmPassword}
                name='confirmPassword'
                onChange={onChange}
                label="Confirm Password"
                {...propsConfirmPassword}
            />
        </>
    )
};

export default RegPasswordInput;