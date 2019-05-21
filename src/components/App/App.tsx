import React from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import Header from '../Header';
import LeftSide from '../LeftSide';
import RightSide from '../RightSide';
import './App.scss';

const cnApp = cn('App');

const App = ({ user }: any) => {
  return (
    <div className={cnApp()}>
      <Header />
      <LeftSide />
      {user.id !== undefined && <RightSide />}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.user
});

export default connect(
  mapStateToProps
)(App);
