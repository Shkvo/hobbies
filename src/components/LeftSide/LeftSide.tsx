import React from 'react';
import { cn } from '@bem-react/classname';
import UserForm from '../UserForm';
import List from '../List';
import User from '../User';
import './LeftSide.scss';

const cnLeftSide = cn('LeftSide');

const users = [
  {
    id: 0,
    name: 'Dima'
  },
  {
    id: 1,
    name: 'Dima'
  },
  {
    id: 2,
    name: 'Dima'
  },
  {
    id: 3,
    name: 'Dima'
  },
  {
    id: 4,
    name: 'Dima'
  },
  {
    id: 5,
    name: 'Dima'
  },
  {
    id: 6,
    name: 'Dima'
  },
  {
    id: 7,
    name: 'Dima'
  },
  {
    id: 8,
    name: 'Dima'
  },
  {
    id: 9,
    name: 'Dima'
  },
  {
    id: 10,
    name: 'Dima'
  },
  {
    id: 11,
    name: 'Dima'
  },
  {
    id: 12,
    name: 'Dima'
  },
  {
    id: 13,
    name: 'Dima'
  },
];

const LeftSide = () => {
  return (
    <div className={cnLeftSide()}>
      <UserForm />
      <List
        items={users}
        Component={User}
      />
    </div>
  );
}

export default LeftSide;
