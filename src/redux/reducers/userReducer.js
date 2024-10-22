// src/redux/reducers/userReducer.js
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
