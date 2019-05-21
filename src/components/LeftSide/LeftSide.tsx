import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import UserForm from '../UserForm';
import List from '../List';
import User from '../User';
import { User as UserType, State } from '../../types';
import './LeftSide.scss';

const cnLeftSide = cn('LeftSide');

type LeftSideProps = {
  users: UserType[];
};

const LeftSide: FunctionComponent<LeftSideProps> = ({ users }) => {
  return (
    <div className={cnLeftSide()}>
      <UserForm />
      <List
        items={users}
        Component={User}
      />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  users: state.users || []
});

export default connect(
  mapStateToProps
)(LeftSide);
