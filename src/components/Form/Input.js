import React, {memo} from 'react';


function Input(props) {
    let {error, className, ...restInput} = props;
    className = (className ? className+' ': '') + 'inputStyle'
    if (error) {
        className += ' input-error';
    }
    return (
        <label>
            <input
                className={className}
                {...restInput}
            />
            <div className='input-error-msg'>
                &nbsp;{error}
            </div>
            {/*{error && <div className='input-error-msg'>*/}
            {/*    {error}*/}
            {/*</div>}*/}
        </label>
    )
}

export default memo(Input);

/*
<label>
                <input
                    className='inputStyle'
                    name='serviceNumber'
                    type='text'
                    placeholder='Номер послуги'
                    value={values.serviceNumber}
                    onChange={handleChange}
                />
                </label>
 */