export type Hobby = {
  id: number;
  passion: string;
  hobby: string;
  year: string;
};

export type User = {
  id: number;
  name: string;
  hobbies: Hobby[];
};

export type State = {
  user: User;
  users: User[];
};

export type Action = {
  type: string;
  data?: any;
};