import React from 'react';
import { cn } from '@bem-react/classname';
import './Header.scss';

const cnHeader = cn('Header');

const Header = () => <div className={cnHeader()}>User hobbies</div>;

export default Header;
