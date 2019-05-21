import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import './Input.scss';

const cnInput = cn('Input');

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FunctionComponent<InputProps> = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={cnInput()}
  />
);

export default Input;
