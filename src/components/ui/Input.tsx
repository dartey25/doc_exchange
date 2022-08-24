import React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({onChange, placeholder, value}) => {
    return (
        <InputUnstyled
            onChange={onChange}
            value={value}
            componentsProps={{ input: { className: 'form-control' } }}
            placeholder={placeholder}
        />
    );
};

export default Input;