import React, { useState, useCallback, ChangeEvent } from 'react';
import { cn } from '@bem-react/classname';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import { options } from '../../helpers/constants';
import './HobbyForm.scss';

const cnHobbyForm = cn('HobbyForm');

const HobbyForm = () => {
  const [passion, setPassion] = useState('');
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
    // action
    setPassion('');
    setHobby('');
    setYear('');
  }, []);

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

export default HobbyForm;
