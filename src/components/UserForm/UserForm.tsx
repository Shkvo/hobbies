import React, { useState, useCallback, ChangeEvent, FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import * as usersActions from '../../redux/actions/users';
import Input from '../Input';
import Button from '../Button';
import { getLastItem } from '../../helpers/getLastItem';
import { User, State } from '../../types';
import './UserForm.scss';

const cnUserForm = cn('UserForm');

type UserFormProps = {
  users: User[];
  createUser: (data: User) => void;
};

const UserForm: FunctionComponent<UserFormProps> = ({ createUser, users }) => {
  const [name, setName] = useState('');

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const handleAddUser = useCallback(() => {
    let lastId = getLastItem(users, 'id');

    const user = {
      id: ++lastId,
      hobbies: [],
      name,
    };
    createUser(user);
    setName('');
  }, [createUser, name, users]);

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

const mapStateToProps = (state: State) => ({
  users: state.users
});

const mapDispatchToProps =  {
  createUser: usersActions.createUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
