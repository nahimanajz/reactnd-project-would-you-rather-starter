import { createStore } from 'redux';
import reducer from './reducers/index';
import middleware from './middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const componserWithEnhancer = composeWithDevTools({})
const store = createStore(reducer, componserWithEnhancer(middleware));

export default store;