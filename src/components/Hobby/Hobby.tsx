import React, { FunctionComponent, useCallback } from 'react';
import { cn } from '@bem-react/classname';
import './Hobby.scss';

const cnHobby = cn('Hobby');

type HobbyProps = {
  data: {
    id: number;
    passion: number;
    hobby: string;
    year: number;
  };
  onDelete: (id: number) => void;
};

const Hobby: FunctionComponent<HobbyProps> = ({ data, onDelete }) => {
  const handleDeleteHobby = useCallback(() => {
    onDelete(data.id);
  }, [onDelete, data]);

  return (
    <div
      key={data.id}
      className={cnHobby()}
    >
      <div className={cnHobby('item')}>
        Passion: {data.passion}
      </div>
      <div className={cnHobby('item')}>
        Hobby: {data.hobby}
      </div>
      <div className={cnHobby('item')}>
        Since {data.year}
      </div>
      <div
        onClick={handleDeleteHobby}
        className={cnHobby('deleteButton')}
      >
        Delete
      </div>
    </div>
  );
}

export default Hobby;
