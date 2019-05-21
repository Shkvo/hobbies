import React, { useState, useCallback, ChangeEvent } from 'react';
import { cn } from '@bem-react/classname';
import Input from '../Input';
import Button from '../Button';
import './UserForm.scss';

const cnUserForm = cn('UserForm');

const UserForm = () => {
  const [name, setName] = useState('');

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const handleAddUser = useCallback(() => {
    // action
    setName('');
  }, []);

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
}

export default UserForm;
