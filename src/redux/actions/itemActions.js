import axios from 'axios';

export const createItem = (item) => ({
    type: 'CREATE_ITEM',
    payload: item,
  });
  
  export const updateItem = (item) => ({
    type: 'UPDATE_ITEM',
    payload: item,
  });
  
  export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: id,
  });


  export const fetchPosts = () => async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({
        type: 'FETCH_POSTS_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_POSTS_ERROR',
        payload: error.message,
      });
    }
  };
  