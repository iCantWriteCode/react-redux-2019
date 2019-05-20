import React from 'react'
import ReactDom from 'react-dom'
// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
// Redux
import reducers from './reducers'

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);