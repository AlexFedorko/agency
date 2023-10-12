import React from 'react';
import InputPassword from "components/Form/InputPassword";
import InputLogin from "./components/InputLogin";

import {withFormik} from "formik";
import Button from "components/Button";
import SendIcon from "@mui/icons-material/Send";
import {Typography} from "@mui/material";

function LoginPage(props) {
    const {values, handleChange, handleSubmit, errors} = props;

    return (
        <form className='login-form'>
            <Typography className='input-h4' variant="h4">Login account</Typography>
            <InputLogin error={errors.login} value={values.login} name="login" onChange={handleChange}/>
            <InputPassword
                error={errors.password}
                value={values.password}
                name="password"
                label='Password'
                onChange={handleChange}
            />
            <div className='login-button'>
                <Button type='submit' onClick={handleSubmit} endIcon={<SendIcon/>}>
                    Enter account
                </Button>
            </div>
        </form>

    );
}

export default withFormik({
    mapPropsToValues: () => ({
        login: '',
        password: ''
    }),

    validate: values => {
        const errors = {};

        if (!values.login) {
            errors.login = 'Required';
        }
        if (values.login.search(/^[0-9a-zA-Z]+$/) === -1) {
            errors.login = 'Login is required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }

        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

})(LoginPage);
