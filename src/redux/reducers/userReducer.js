import { login } from '../auth/api';

const initState = {
  user: {},
  signedIn: false,
  error: '',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      return {
        ...state,
        user: action.payload,
        signedIn: true,
        error: '',
      };
    default:
      return state;
  }
};

export const signIn = (email, password) => async (dispatch) => {
  await login(email, password)
    .then(({ status }) => {
      if (status.code === 200) dispatch({ type: 'SIGNED_IN', payload: status.data });
      else dispatch({ type: 'ERROR', payload: 'User not found' });
    })
    .catch(() => dispatch({ type: 'SIGNING_IN' }));
};

export default userReducer;
