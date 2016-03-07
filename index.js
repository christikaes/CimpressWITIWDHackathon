import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import initialRecipeState from './initialRecipeState.json'
import nodeRest from 'node-rest-client'
import { fetchRetrieveIfNeeded } from './actions'

const initialState = {"recipe": initialRecipeState}

const store = configureStore(initialState);

// If there is an id in the qs, prepopulate the recipe:

// store.dispatch(fetchRetrieveIfNeeded("d7aff1b9c43e239b983d5dc9679e6110", true));

const rootElement = document.getElementById('root')
render(
	  <Provider store={store}>
	    <Router history={browserHistory} routes={routes} />
	  </Provider>,
	  rootElement
)

