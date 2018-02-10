import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store, {history} from './store';
import {ConnectedRouter} from 'react-router-redux';

const Tracker = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(<Tracker/> , document.getElementById('root'));
registerServiceWorker();