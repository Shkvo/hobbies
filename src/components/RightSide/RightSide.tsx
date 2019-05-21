import React from 'react';
import { cn } from '@bem-react/classname';
import HobbyForm from '../HobbyForm';
import List from '../List';
import Hobby from '../Hobby';

import './RightSide.scss';

const cnRightSide = cn('RightSide');

const hobbies = [
  {
    id: 0,
    passion: 'Very-High',
    hobby: 'music',
    year: '2011'
  },
  {
    id: 1,
    passion: 'Very-High',
    hobby: 'music',
    year: '2011'
  },
];

const RightSide = () => {
  return (
    <div className={cnRightSide()}>
      <HobbyForm />
      <List
        items={hobbies}
        Component={Hobby}
      />
    </div>
  );
}

export default RightSide;
