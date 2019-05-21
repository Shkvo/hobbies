import React, { FunctionComponent, useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/user';
import { User as UserType } from '../../types';
import './User.scss';

const cnUser = cn('User');

type UserProps = {
  data: UserType;
  selectUser: (data: UserType) => void;
};

const User: FunctionComponent<UserProps> = ({ data, selectUser }) => {
  const handleSelectUser = useCallback(() => {
    selectUser(data);
  }, [selectUser, data]);

  return (
    <div
      key={data.id}
      onClick={handleSelectUser}
      className={cnUser()}
    >
      {data.name}
    </div>
  );
};

const mapDispatchToProps = {
  selectUser: userActions.selectUser
};

export default connect(
  null,
  mapDispatchToProps
)(User);
