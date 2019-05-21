import React, { FunctionComponent, useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/user';
import './Hobby.scss';

const cnHobby = cn('Hobby');

type HobbyProps = {
  currentUserId: number;
  data: {
    id: number;
    passion: number;
    hobby: string;
    year: number;
  };
  deleteHobby: (hobbyId: number, userId: number) => void;
};

const Hobby: FunctionComponent<HobbyProps> = ({ data, deleteHobby, currentUserId }) => {
  const handleDeleteHobby = useCallback(() => {
    deleteHobby(data.id, currentUserId);
  }, [deleteHobby, data, currentUserId]);

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
};

const mapStateToProps = (state: any) => ({
  currentUserId: state.user.id
});

const mapDispatchToProps = {
  deleteHobby: userActions.deleteHobby
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hobby);
