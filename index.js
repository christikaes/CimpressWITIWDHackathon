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

// TODO: SET INITIAL STATE HERE WOO
const initialState = {"recipe": initialRecipeState}

		// // If there is an id on the query string in the url load that:
		// var client = new nodeRest.Client();

		// // TODO: What do I dooo
		// var args =  {
		// 	parameters: {entry_id : "9a144033d124776ee2d0e82432bb329a"}
		// }

		// // direct way 
		// client.get("http://localhost:3000/recipe-saved", args, function (data, response) {
		// 	if(data && data.data && data.data.Item){
		// 		tempinitialState = {recipe : data.data.Item}
		// 	}
		// });

const store = configureStore(initialState);

store.dispatch(fetchRetrieveIfNeeded("d7aff1b9c43e239b983d5dc9679e6110", true));

const rootElement = document.getElementById('root')
render(
	  <Provider store={store}>
	    <Router history={browserHistory} routes={routes} />
	  </Provider>,
	  rootElement
)

