// src/redux/actions/userActions.js
export const updateUser = (userData) => {
    return {
      type: 'UPDATE_USER',
      payload: userData,
    };
  };
  