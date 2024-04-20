import React from 'react';

const InputBox = ({ label, id, value, onChange, type }) => {
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
        </div>
    );
}

export default InputBox;
