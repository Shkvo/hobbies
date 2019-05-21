import { User } from './../../types';
import { CREATE_USER } from '../types';

export const createUser = (data: User) => ({
  type: CREATE_USER,
  data
});
