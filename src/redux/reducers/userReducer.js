// src/redux/reducers/userReducer.js
const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
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
  