import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import './Button.scss';

const cnButton = cn('Button');

type ButtonProps = {
  caption: string;
  onClick: () => void;
};

const Button: FunctionComponent<ButtonProps> = ({ caption, onClick }) => (
  <button
    onClick={onClick}
    className={cnButton()}
  >
    {caption}
  </button>
);

export default Button;
