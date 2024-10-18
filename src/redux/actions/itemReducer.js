const itemReducer = (state = { items: [], posts: [] }, action) => {
  switch (action.type) {
    case 'CREATE_ITEM':
      return { ...state, items: [...state.items, { ...action.payload, id: new Date().getTime().toString() }] };
    case 'UPDATE_ITEM':
      return { ...state, items: state.items.map((item) => item.id === action.payload.id ? { ...action.payload } : item) };
    case 'DELETE_ITEM':
      return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, posts: action.payload };
    case 'FETCH_POSTS_ERROR':
      console.error(action.payload);
      return state;
    default:
      return state;
  }
};

export default itemReducer;