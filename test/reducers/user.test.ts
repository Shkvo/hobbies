import reducer from '../../src/redux/reducers/user';
import { SELECT_USER, CREATE_HOBBY, DELETE_HOBBY } from './../../src/redux/types';

const defaultUser = {
  id: 0,
  name: 'Test',
  hobbies: []
};

const defaultHobby = {
  id: 0,
  passion: 'Low',
  hobby: 'Test',
  year: '2019'
};

describe('User reducer:', () => {
  it('Selects user properly', () => {
    const action = {
      type: SELECT_USER,
      data: defaultUser
    };

    expect(reducer({} as any, action)).toEqual(action.data);
  });

  it('Creates hobby properly', () => {
    const action = {
      type: CREATE_HOBBY,
      data: {
        id: 0,
        hobby: defaultHobby
      }
    };

    const expectedState = {
      ...defaultUser,
      hobbies: [defaultHobby]
    }

    expect(reducer(defaultUser, action)).toEqual(expectedState);
  });

  it('Deletes hobby properly', () => {
    const state = {
      ...defaultUser,
      hobbies: [defaultHobby]
    };

    const action = {
      type: DELETE_HOBBY,
      data: {
        hobbyId: 0
      }
    };

    const expectedState = {
      ...defaultUser,
      hobbies: []
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});