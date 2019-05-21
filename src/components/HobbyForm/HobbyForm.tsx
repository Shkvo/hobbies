import React, { useState, useCallback, ChangeEvent } from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import { options } from '../../helpers/constants';
import * as userActions from '../../redux/actions/user';
import './HobbyForm.scss';

const cnHobbyForm = cn('HobbyForm');

const HobbyForm = ({ createHobby, currentUserId }: any) => {
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
    const record = {
      hobby,
      passion,
      year
    };

    createHobby(currentUserId, record);
    setPassion('Low');
    setHobby('');
    setYear('');
  }, [hobby, passion, year, createHobby, currentUserId]);

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

const mapStateToProps = (state: any) => ({
  currentUserId: state.user.id
});

const mapDispatchToProps = {
  createHobby: userActions.createHobby
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HobbyForm);
