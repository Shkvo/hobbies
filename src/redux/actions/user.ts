import { CREATE_HOBBY, DELETE_HOBBY, SELECT_USER } from './../types';

export const selectUser = (data: any) => ({
  type: SELECT_USER,
  data
});

export const createHobby = (id: number, hobby: any) => ({
  type: CREATE_HOBBY,
  data: { hobby, id }
});

export const deleteHobby = (hobbyId: number, userId: number) => ({
  type: DELETE_HOBBY,
  data: { hobbyId, userId }
});
