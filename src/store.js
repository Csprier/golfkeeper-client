import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import scoreReducer from './reducers/scoreReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(scoreReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

export default store;