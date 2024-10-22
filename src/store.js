// src/store.js
import { createStore, combineReducers } from 'redux';

const initialCartState = {
  cartItems: [],
};

function cartReducer(state = initialCartState, action) {
  // Similar to the reducer function in Context API example
}

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer);

const user = useSelector((state) => {
  console.log("Redux User Data: ", state.user);
  return state.user;
}) || {};


export default store;
