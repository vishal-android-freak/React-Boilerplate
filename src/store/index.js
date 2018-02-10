import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(reducer, applyMiddleware(middleware, thunk));

export default store;
export {history};