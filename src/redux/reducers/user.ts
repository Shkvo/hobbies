import { getLastItem } from './../../helpers/getLastItem';
import { CREATE_HOBBY, DELETE_HOBBY, SELECT_USER } from '../types';

export default (state: any = {}, action: any) => {
  switch (action.type) {
    case SELECT_USER:
      return action.data;

    case CREATE_HOBBY:
      let lastId = getLastItem(state.hobbies, 'id');

      return {
        ...state,
        hobbies: [...state.hobbies, {
          id: ++lastId,
          ...action.data.hobby
        }],
      };

    case DELETE_HOBBY:
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby: any) => hobby.id !== action.data.hobbyId)
      };

    default:
      return state;
  }
};