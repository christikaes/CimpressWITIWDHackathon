import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import routes from './routes'
// import todoApp from './reducers'

// const store = createStore(todoApp)

import configureStore from './store/configureStore'

const store = configureStore()

const rootElement = document.getElementById('root')
render(
	  <Provider store={store}>
	    <Router history={browserHistory} routes={routes} />
	  </Provider>,
	  rootElement
)

