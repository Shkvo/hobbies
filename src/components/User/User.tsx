import React, { FunctionComponent, useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/user';
import './User.scss';

const cnUser = cn('User');

type UserProps = {
  data: {
    id: number;
    name: string;
  };
  selectUser: (data: any) => void;
};

const User: FunctionComponent<UserProps> = ({ data, selectUser }) => {
  const handleSelectUser = useCallback(() => {
    selectUser(data);
  }, [selectUser, data])

  return (
    <div
      key={data.id}
      onClick={handleSelectUser}
      className={cnUser()}
    >
      {data.name}
    </div>
  );
}

const mapDispatchToProps = {
  selectUser: userActions.selectUser
};

export default connect(
  null,
  mapDispatchToProps
)(User);
