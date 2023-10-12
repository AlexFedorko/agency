import React from 'react';
import GenderInput from "page/user/registration/GenderInput";
import RegUserInfo from "page/user/registration/RegName";
import PhoneNumbInput from "page/user/registration/PhoneNumInput";
import CountrySelect from "components/Form/CountryInput";
import BirthdayInput from "page/user/registration/BirthdayInput";
import EmailReg from "components/Form/EmailInput";
import Button from "components/Button";
import RegPasswordInput from "page/user/registration/RegPasswordInput";
import CityRegInput from "page/user/registration/CityRegInput";
import SendIcon from "@mui/icons-material/Send";
import {withFormik} from "formik";
import {Stack} from "@mui/material";
import TextField from "@mui/material/TextField";

function RegPage (props) {
    const {values, handleChange, handleSubmit, isValid, errors, setFieldValue} = props;
    console.log(errors);
    return (
        <form onSubmit={handleSubmit} className="reg-form">
            <Stack spacing={2}>
                <RegUserInfo
                    name='name'
                    values={values}
                    errors={errors}
                    onChange={handleChange}
                />
                <RegPasswordInput
                    name='password'
                    values={values}
                    errors={errors}
                    onChange={handleChange}
                />
                <EmailReg
                    name='email'
                    error={errors.email}
                    value={values.email}
                    onChange={handleChange}
                />
                <PhoneNumbInput
                    name='phone'
                    error={errors.phone}
                    value={values.phone}
                    onChange={setFieldValue}
                />
                <BirthdayInput
                    name='birthday'
                    error={errors.birthday}
                    value={values.birthday}
                    onChange={handleChange}
                />
                <GenderInput
                    name='gender'
                    errors={errors}
                    values={values}
                    onChange={handleChange}
                />
                <CountrySelect
                    name='country'
                    error={errors.country}
                    value={values.country}
                    onChange={handleChange}
                />
                <CityRegInput
                    name='city'
                    values={values}
                    errors={errors}
                    onChange={handleChange}
                />
                <div className='reg-button'>
                    <Button
                        disabled = {isValid}
                        onClick = {handleSubmit}
                        type='submit'
                        endIcon={<SendIcon/>}>
                        Create account
                    </Button>
                </div>
            </Stack>
        </form>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        birthday: '',
        gender: '',
        country: '',
        city: '',
        postcode: ''
    }),
    validate: (values) => {
        const {name} = values;
        const errors = {};

        // Name Configuration
        if (!name && name.length >= 1) {
            errors.name = 'Enter your name';
        }
        if (name.length < 4 && values.name.length > 1) {
            errors.name = 'Your name is to short!'
        }

        // Surname Configuration
        if (!values.surname && values.surname.length >= 1) {
            errors.surname = 'Enter your surname';
        }
        if (values.name.length < 4 && values.name.length > 1) {
            errors.surname = 'Your surname is to short!'
        }
        if (values.surname === values.name && values.name.length >= 1) {
            errors.surname = 'Your name and surname must be different!'
        }

        // Email Configuration
        if (!values.email && values.email.length > 1) {
            errors.email = 'Enter your email address';
        }
        if (values.email.search(/^[0-9a-zA-Z-@gmail.com]+$/) === -1 && values.email.length >= 1) {
            errors.email = 'Email is required';
        }

        // Password & Confirm password configurations
        if (!values.password) {
            errors.password = 'Enter your password';
        }
        if (values.confirmPassword !== values.password ) {
            errors.confirmPassword = 'Password not correct!';
        }
        if (values.password.length <= 6) {
            errors.password = 'Password length is to short';
        }

        // City & Index configurations
        if (!values.city) {
            errors.city = 'Enter your city';
        }
        if (values.postcode.length <= 5) {
            errors.postcode = 'Postcode must have 5 digits'
        }

        return errors;
    }
})(RegPage);
//
// Name (текстовое поле) +
// Surname (текстовое поле) +
// password (поле для ввода пароля с защитой от показа вводимых символов) +
// check password (поле для повторного ввода пароля) +
// Email (текстовое поле с проверкой формата email) +
// PhoneNumber (текстовое поле с проверкой формата номера телефона) +
// Birthday data(поле выбора даты) +
// Gender(выбор из предопределенных вариантов: мужской, женский, другой) +
// Country (выбор из предопределенных вариантов) +
//
// City where living (текстовое поле)
// Index (текстовое поле, с проверкой)

