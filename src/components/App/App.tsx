import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import Header from '../Header';
import LeftSide from '../LeftSide';
import RightSide from '../RightSide';
import { User, State } from '../../types';
import './App.scss';

const cnApp = cn('App');

type AppProps = {
  user: User;
};

const App: FunctionComponent<AppProps> = ({ user }) => {
  const isUserSelected = user.id !== undefined;

  return (
    <div className={cnApp()}>
      <Header />
      <LeftSide />
      {isUserSelected && <RightSide />}
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  user: state.user
});

export default connect(
  mapStateToProps
)(App);
