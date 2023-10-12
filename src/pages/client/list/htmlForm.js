import React from 'react';
import {withFormik} from "formik";
import {isEmptyObject} from "../../../Helper";
import Input from "components/Form/Input";
import Select from "components/Form/Select";
import InputTextArea from "components/Form/InputTextArea";
import ImgLogo from "components/Form/ImgLogo";


function SimpleFormPage(props) {

    const {values, isValid, handleChange, handleSubmit, errors, setFieldValue} = props;
    console.log(values)
    return (
        <form className='simpleFormPage' onSubmit={handleSubmit}>
            <label>
                <h4>Послуги:</h4>

                {/*<select*/}
                {/*    className='inputStyle'*/}
                {/*    name='service'*/}
                {/*    value={values.service}*/}
                {/*    onChange={(e) => setFieldValue('service', e.target.value, false)}*/}

                {/*>*/}
                {/*    <option value=''></option>*/}
                {/*    <option value='Gas'>Газ</option>*/}
                {/*    <option value='Voda'>Вода</option>*/}
                {/*    <option value='Electric'>Електрика</option>*/}
                {/*</select>*/}
            </label>
            <Select
                name='service'
                value={values.service}
                onChange={handleChange}
                error={errors.service}
                options={{
                    '': '',
                    gas: 'Газ',
                    water: 'Вода',
                    electric: 'Електрика'
                }}
            />
            <Input
                type='text'
                name='serviceNumber'
                placeholder='Номер послуги'
                value={values.serviceNumber}
                error={errors.serviceNumber}
                onChange={handleChange}
            />
            <Input
                type='text'
                name='account'
                placeholder='Особовий рахунок'
                value={values.account}
                error={errors.account}
                onChange={handleChange}
            />
            <h4>Тема звернення:</h4>
            <Select
                className='inputStyle'
                name='serviceType'
                value={values.serviceType}
                onChange={handleChange}
                error={errors.serviceType}
                options={{
                    '': '',
                    pay: 'Оплата послуг',
                    stats: 'Подання показників',
                    support: 'Підтримка'
                }}
            />
            <h4>Текст звернення:</h4>
            <InputTextArea
                name='textInput'
                rows={8}
                cols={40}
                value={values.textInput}
                error={errors.textInput}
                onChange={handleChange}
            />
            <h4>Ініціали користувача:</h4>
            <Input
                className='inputStyle'
                name='surname'
                type='text'
                placeholder='Прізвище'
                onChange={handleChange}
                value={values.surname}
                error={errors.surname}
            />
            <Input
                className='inputStyle'
                name='firstName'
                type='text'
                placeholder="Ім'я"
                value={values.firstName}
                error={errors.firstName}
                onChange={handleChange}
            />
            <Input
                className='inputStyle'
                name='lastName'
                type='text'
                placeholder='По батькові'
                value={values.lastName}
                error={errors.lastName}
                onChange={handleChange}
            />
            <h4>Особиста інформація:</h4>

            <Input
                className='inputStyle'
                name='email'
                type='email'
                placeholder='Email'
                value={values.email}
                error={errors.email}
                onChange={handleChange}
            />
            <h4>Номер телефону:</h4>
            <Input
                className='inputStyle'
                name='phoneNumber'
                type='tel'
                placeholder='+38'
                value={values.phoneNumber}
                error={errors.phoneNumber}
                maxLength={13}
                onChange={handleChange}
            />
            <Input
                className='inputStyle'
                name='region'
                type='text'
                placeholder='Регіон надання послуг'
                value={values.region}
                error={errors.region}
                onChange={handleChange}
            />
            <Input
                className='inputStyle'
                name='settlement'
                type='text'
                placeholder='Населений пункт'
                value={values.settlement}
                error={errors.settlement}
                onChange={handleChange}
            />
            <Input
                className='inputStyle'
                name='street'
                type='text'
                placeholder='Вулиця'
                value={values.street}
                error={errors.street}
                onChange={handleChange}
            />
            <Input
                className='inputStyle'
                name='houseNumber'
                type='text'
                placeholder='№ будинку'
                value={values.houseNumber}
                error={errors.houseNumber}
                onChange={handleChange}
            />
            <Input
                className='inputStyle'
                name='apartment'
                type='text'
                placeholder='Квартира'
                value={values.apartment}
                error={errors.apartment}
                onChange={handleChange}
            />
            <button
                className='formButton'
                disabled={!isEmptyObject(errors) || !isValid}
                type='submit'
                onClick={handleSubmit}
            >Відправити
            </button>
        </form>
    );
}

export default withFormik({
    mapPropsToValues: () => ({
        service: '',
        serviceNumber: '',
        account: '',
        serviceType: '',
        textInput: '',
        email: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        surname: '',
        region: '',
        street: '',
        houseNumber: '',
        apartment: '',
        settlement: '',

    }),
    isInitialValid: false,
    validate: (values) => {
        const errors = {};

        if (!values.service) {
            errors.service = 'Необхідно вибрати послугу';
        }
        if (!values.serviceNumber) {
            errors.serviceNumber = 'Необхідно ввести № послуги';
        }
        if (!values.account) {
            errors.account = 'Введіть Ваш особовий рахунок';
        }
        if (!values.serviceType) {
            errors.serviceType = 'Виберіть тему звернення';
        }
        if (!values.textInput) {
            errors.textInput = 'Введіть текст звернення...';
        }
        if (!values.surname) {
            errors.surname = 'Введіть ваше Прізвище';
        }
        if (!values.firstName) {
            errors.firstName = "Введіть ваше Ім'я"
        }
        if (!values.lastName) {
            errors.lastName = 'Введіть по батькові'
        }
        if (!values.email) {
            errors.email = 'Відсутні данні про e-mail';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Введіть мобільний номер телефону';
        }
        if (!values.region) {
            errors.region = 'Введіть регіон надання послуг';
        }
        if (!values.apartment) {
            errors.apartment = 'Введіть номер квартири';
        }
        if (!values.houseNumber) {
            errors.houseNumber = 'Введіть номер будинку';
        }
        if (!values.street) {
            errors.street = 'Введіть назву вулиці';
        }
        if (!values.settlement) {
            errors.settlement = 'Введіть назву населеного пункту';
        }


        return errors;
    }
})(SimpleFormPage);