import { CREATE_USER, CREATE_HOBBY, DELETE_HOBBY } from '../types';
import { getLastItem } from '../../helpers/getLastItem';

let lastId: number;

export default (state: any = [], action: any) => {
  switch (action.type) {
    case CREATE_USER:
      lastId = getLastItem(state, 'id');

      return [...state, {
        id: ++lastId,
        name: action.data,
        hobbies: [],
      }];

    case CREATE_HOBBY:
      return state.map((item: any) => {
        if (item.id === action.data.id) {
          lastId = getLastItem(item.hobbies, 'id');

          return {
            ...item,
            hobbies: [...item.hobbies, {
              id: ++lastId,
              ...action.data.hobby
            }]
          }
        }
        return item;
      })

    case DELETE_HOBBY:
      return state.map((item: any) => {
        if (item.id === action.data.userId) {
          return {
            ...item,
            hobbies: item.hobbies.filter((hobby: any) => hobby.id !== action.data.hobbyId)
          };
        }
        return item;
      });

    default:
      return state;
  }
};