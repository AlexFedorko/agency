import React, {memo} from 'react';


function Select(props) {
    let {error, className, options, ...restProps} = props;
    className = className ? className + ' ' : '';
    className += 'inputStyle'
    if (error) {
        className += ' input-error'
    }

    return (
        <label>
            <select
                className={className}
                {...restProps}
            >
                {Object.keys(options).map((key) =>
                    <option key={key} value={key}>{options[key]}</option>
                )}
            </select>
            <div className='input-error-msg'>
                &nbsp;{error}
            </div>
        </label>
    )
}

export default memo(Select);