import { User, Action } from '../../types';
import { CREATE_USER, CREATE_HOBBY, DELETE_HOBBY } from '../types';

export default (state: User[] = [], action: Action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.data];

    case CREATE_HOBBY:
      return state.map(item => {
        if (item.id === action.data.id) {
          return {
            ...item,
            hobbies: [...item.hobbies, action.data.hobby]
          }
        }
        return item;
      });

    case DELETE_HOBBY:
      return state.map(item => {
        if (item.id === action.data.userId) {
          return {
            ...item,
            hobbies: item.hobbies.filter(hobby => hobby.id !== action.data.hobbyId)
          };
        }
        return item;
      });

    default:
      return state;
  }
};