import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import HobbyForm from '../HobbyForm';
import List from '../List';
import Hobby from '../Hobby';
import { State, Hobby as HobbyType } from '../../types';
import './RightSide.scss';

const cnRightSide = cn('RightSide');

type RightSideProps = {
  hobbies: HobbyType[];
};

const RightSide: FunctionComponent<RightSideProps> = ({ hobbies }) => {
  return (
    <div className={cnRightSide()}>
      <HobbyForm />
      <List
        items={hobbies}
        Component={Hobby}
      />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  hobbies: state.user.hobbies
});

export default connect(
  mapStateToProps
)(RightSide);
