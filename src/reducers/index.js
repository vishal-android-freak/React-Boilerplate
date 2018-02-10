import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const reducer = combineReducers({
    router: routerReducer
});

export default reducer;