import React from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import UserForm from '../UserForm';
import List from '../List';
import User from '../User';
import './LeftSide.scss';

const cnLeftSide = cn('LeftSide');

const LeftSide = ({ users }: any) => {
  return (
    <div className={cnLeftSide()}>
      <UserForm />
      <List
        items={users}
        Component={User}
      />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  users: state.users || []
});

export default connect(
  mapStateToProps
)(LeftSide);
