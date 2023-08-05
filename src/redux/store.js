// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducers';

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;
