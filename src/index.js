import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider }                     from 'react-redux'
import Thunk                            from 'redux-thunk'
import registerServiceWorker            from './registerServiceWorker'

import Reducers                         from './reducers/index'
import App                              from './app'
import './index.css'

const store = createStore(
  Reducers,
  applyMiddleware(Thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
