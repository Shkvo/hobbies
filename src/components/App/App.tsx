import React from 'react';
import { cn } from '@bem-react/classname';
import Header from '../Header';
import LeftSide from '../LeftSide';
import RightSide from '../RightSide';
import './App.scss';

const cnApp = cn('App');

const App = () => {
  return (
    <div className={cnApp()}>
      <Header />
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
