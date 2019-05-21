import React, { useState, useCallback, ChangeEvent, FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import { options } from '../../helpers/constants';
import * as userActions from '../../redux/actions/user';
import { Hobby, State, User } from '../../types';
import './HobbyForm.scss';
import { getLastItem } from '../../helpers/getLastItem';

const cnHobbyForm = cn('HobbyForm');

type HobbyFormProps = {
  user: User;
  createHobby: (userId: number, hobby: Hobby) => void;
};

const HobbyForm: FunctionComponent<HobbyFormProps> = ({ createHobby, user }) => {
  const [passion, setPassion] = useState('Low');
  const [hobby, setHobby] = useState('');
  const [year, setYear] = useState('');

  const handlePassionChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setPassion(event.target.value);
  }, []);

  const handleHobbyChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setHobby(event.target.value);
  }, []);

  const handleYearChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  }, []);

  const handleAddHobby = useCallback(() => {
    let lastId = getLastItem(user.hobbies, 'id');

    const record = {
      id: ++lastId,
      hobby,
      passion,
      year
    };

    createHobby(user.id, record);
    setPassion('Low');
    setHobby('');
    setYear('');
  }, [hobby, passion, year, user, createHobby]);

  return (
    <div className={cnHobbyForm()}>
      <Select
        value={passion}
        onChange={handlePassionChange}
        options={options}
      />
      <Input
        value={hobby}
        onChange={handleHobbyChange}
        placeholder="Enter hobby..."
      />
      <Input
        value={year}
        onChange={handleYearChange}
        placeholder="Enter year..."
      />
      <Button
        caption="Add"
        onClick={handleAddHobby}
      />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  user: state.user
});

const mapDispatchToProps = {
  createHobby: userActions.createHobby
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HobbyForm);
