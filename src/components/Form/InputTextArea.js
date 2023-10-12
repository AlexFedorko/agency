import React, {memo} from 'react';

function InputTextArea(props) {
    let {error, className, ...restAreaProps} = props;
    className = (className ? className + ' ' : '')
    if (error) {
        className += 'input-error';
    }

    return (
        <label>
            <textarea
            className={className}
            {...restAreaProps}
            />
            <div className='input-error-msg'>
                &nbsp;{error}
            </div>
        </label>
    )
}

export default memo(InputTextArea);
