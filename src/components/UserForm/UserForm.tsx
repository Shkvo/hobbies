import React, { useState, useCallback, ChangeEvent } from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import * as usersActions from '../../redux/actions/users';
import Input from '../Input';
import Button from '../Button';
import './UserForm.scss';

const cnUserForm = cn('UserForm');

const UserForm = ({ createUser }: any) => {
  const [name, setName] = useState('');

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const handleAddUser = useCallback(() => {
    createUser(name);
    setName('');
  }, [createUser, name]);

  return (
    <div className={cnUserForm()}>
      <Input
        value={name}
        onChange={handleNameChange}
        placeholder="Enter user name..."
      />
      <Button
        caption="Add"
        onClick={handleAddUser}
      />
    </div>
  );
};

const mapDispatchToProps =  {
  createUser: usersActions.createUser
};

export default connect(
  null,
  mapDispatchToProps
)(UserForm);
