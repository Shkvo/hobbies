import { User, Action } from '../../types';
import { CREATE_HOBBY, DELETE_HOBBY, SELECT_USER } from '../types';

export default (state: User = {} as any, action: Action) => {
  switch (action.type) {
    case SELECT_USER:
      return action.data;

    case CREATE_HOBBY:
      return {
        ...state,
        hobbies: [...state.hobbies, action.data.hobby]
      };

    case DELETE_HOBBY:
      return {
        ...state,
        hobbies: state.hobbies.filter(hobby => hobby.id !== action.data.hobbyId)
      };

    default:
      return state;
  }
};