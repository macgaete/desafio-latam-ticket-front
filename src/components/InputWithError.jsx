import React from 'react';
import FormError from './FormError';

const InputWithError = ({ label, id, value, onChange, error, type }) => {
    return (
        <div className='formGroup'>
            <div className='inputContainer'>
                <label htmlFor={id}>{label}</label>
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div className='errorContainer'>
                {error && <FormError errorMessage={error} />}
            </div>
        </div>
    );
}

export default InputWithError;
