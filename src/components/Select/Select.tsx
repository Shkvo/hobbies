import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import './Select.scss';

const cnSelect = cn('Select');

type SelectProps = {
  value: string;
  options: {
    value: number;
    caption: string;
  }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: FunctionComponent<SelectProps> = ({ value, onChange, options }) => (
  <div className={cnSelect()}>
    <select
      value={value}
      onChange={onChange}
    >
    {options.map(item => (
      <option
        key={item.value}
        value={item.value}
      >
        {item.caption}
      </option>
    ))}
  </select>
  </div>
);

export default Select;
