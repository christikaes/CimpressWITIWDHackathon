import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initialState) {
  const store = createStore(
  	rootReducer, 
  	initialState, 
    compose(
    	applyMiddleware(
	      thunkMiddleware
	    ),
	    window.devToolsExtension ? window.devToolsExtension() : undefined
	)
  )
  return store;
}
    // window.devToolsExtension ? window.devToolsExtension() : undefined,