import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import './User.scss';

const cnUser = cn('User');

type UserProps = {
  data: {
    id: number;
    name: string;
  };
  onClick?: () => void;
};

const User: FunctionComponent<UserProps> = ({ data, onClick }) => {
  return (
    <div
      key={data.id}
      onClick={onClick}
      className={cnUser()}
    >
      {data.name}
    </div>
  );
}

export default User;
