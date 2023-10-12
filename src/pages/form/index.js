import React from 'react';
import {Button, MenuItem, NativeSelect, Select, Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import {withFormik} from "formik";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import {AccountCircle} from "@mui/icons-material";
import EmailReg from "components/Form/EmailInput";
import PhoneNumbInput from "page/user/registration/PhoneNumInput";
import {isEmptyObject} from "../../Helper";


function FormPage(props) {

    const {values, handleChange, handleSubmit, isValid, errors, setFieldValue} = props;
    console.log(values);
    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <div>
                    <InputLabel>
                        Послуга
                    </InputLabel>
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel></InputLabel>
                            <Select
                                value={values.service}
                                onChange={(e)=>setFieldValue('service', e.target.value, false)}
                            >
                                <MenuItem value={''}></MenuItem>
                                <MenuItem value={'water'}>Вода</MenuItem>
                                <MenuItem value={'gas'}>Газ</MenuItem>
                                <MenuItem value={'electric'}>Електрика</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        name='serviceNumber'
                        error={!!errors.serviceNumber}
                        values={values}
                        onChange={handleChange}
                        label="Номер послуги"
                        defaultValue=""
                    />
                    <TextField
                        name='account'
                        error={!!errors.account}
                        values={values}
                        onChange={handleChange}
                        label="Особовий рахунок"
                        defaultValue=""
                    />
                    <InputLabel>
                        Тема звернення
                    </InputLabel>
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel></InputLabel>
                            <Select
                                value={values.serviceType}
                                onChange={(e) =>setFieldValue('serviceType', e.target.value, false)}
                            >
                                <MenuItem value={''}></MenuItem>
                                <MenuItem value={'pay'}>Оплата послуг</MenuItem>
                                <MenuItem value={'stats'}>Подання показників</MenuItem>
                                <MenuItem value={'support'}>Підтримка</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField sx={{minWidth: 450}}
                               label="Текст звернення"
                               multiline
                               rows={6}
                               defaultValue=""
                               variant="standard"
                               name='textInput'
                               values={values}
                               error={!!errors.textInput}
                               onChange={handleChange}
                               helperText={errors.textInput}
                    />
                </div>
                <div>
                    <Box sx={{'& > :not(style)': {m: 1}}}>
                        <FormControl
                            variant="standard">
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Прізвище
                            </InputLabel>
                            <Input
                                name='surname'
                                onChange = {handleChange}
                                value={values.surname}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle/>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <TextField
                            label="Ім'я"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle/>
                                    </InputAdornment>
                                ),
                            }}
                            name='firstName'
                            variant="standard"
                            values={values}
                            error={!!errors.firstName}
                            onChange={handleChange}

                        />
                        <TextField
                            label="Ім'я по батькові"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle/>
                                    </InputAdornment>
                                ),
                            }}
                            name='lastName'
                            variant="standard"
                            values={values}
                            error={!!errors.lastName}
                            onChange={handleChange}
                        />
                    </Box>
                </div>

            <PhoneNumbInput
                name='phone'
                value={values.phone}
                onChange={setFieldValue}
            />
            <EmailReg
                name='email'
                error={errors.email}
                value={values.email}
                onChange={handleChange}
            />
            <div>
                <TextField
                    label="Регіон надання послуг"
                    variant="outlined"
                    name='region'
                    values={values}
                    error={!!errors.region}
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField
                    label="Населений пункт"
                    variant="outlined"
                    name='settlement'
                    values={values}
                    error={!!errors.settlement}
                    onChange={handleChange}
                />
                <TextField
                    label="Вулиця"
                    variant="outlined"
                    name='street'
                    values={values}
                    error={!!errors.street}
                    onChange={handleChange}
                />
                <TextField
                    label="№ будинку"
                    variant="outlined"
                    name='houseNumber'
                    values={values}
                    error={!!errors.houseNumber}
                    onChange={handleChange}
                />
                <TextField
                    label="Квартира"
                    variant="outlined"
                    name='apartment'
                    values={values}
                    error={!!errors.apartment}
                    onChange={handleChange}
                />
            </div>
            <Button disabled={!isEmptyObject(errors) || !isValid}
                    type='submit'
                    onClick={handleSubmit}>
                Відправити
            </Button>
            </Stack>
        </form>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        service: '',
        serviceType: '',
        serviceNumber: '',
        account: '',
        textInput: '',
        email: '',
        phone: '',
        firstName: '',
        surname: '',
        lastName: '',
        region: '',
        street: '',
        houseNumber: '',
        apartment: '',
        settlement: '',


    }),
    isInitialValid:false,
    validate: (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        }
        if (!values.serviceNumber) {
        errors.serviceNumber = 'Required';
        }
        if (!values.account) {
            errors.account = 'Required';
        }
        if (!values.region) {
            errors.region = 'Required';
        }
        if (!values.textInput) {
            errors.textInput = 'Required';
        }
        if (!values.apartment) {
            errors.apartment = 'Required';
        }
        if (!values.houseNumber) {
            errors.houseNumber = 'Required';
        }
        if (!values.street) {
            errors.street = 'Required';
        }
        if (!values.settlement) {
            errors.settlement = 'Required';
        }
        if (!values.firstName) {
            errors.firstName = 'Required'
        }
        if (!values.lastName) {
            errors.lastName = 'Required'
        }
        return errors;
    }
})(FormPage);
