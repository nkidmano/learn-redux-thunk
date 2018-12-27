import jsonPlaceHolder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUserById = userId => async dispatch => {
  const response = await jsonPlaceHolder.get('/users/' + userId);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
