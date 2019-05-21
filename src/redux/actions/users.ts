import { CREATE_USER } from './../types';

export const createUser = (data: any) => ({
  type: CREATE_USER,
  data
});
