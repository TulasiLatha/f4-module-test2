// redux/actions.js

import axios from "axios";
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

// redux/actions.js


// ... other action types and action creators ...

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const postsWithImages = response.data.map((post) => ({
          ...post,
          imgSrc: `https://picsum.photos/200?random=${post.id}`,
        }));
        dispatch(fetchPostsSuccess(postsWithImages));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};

