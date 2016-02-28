import React from 'react'
import { IndexRoute, Route } from 'react-router'

import {
	App,
	NotFound,
	Home,
	Tech,
	Recipe
} from './containers';

export default (
  	<Route path="/" component={App}>
        { /* Home (main) route  */ }
  		<IndexRoute component={Home}/>

      { /* Routes */ }
       	<Route path="home" component={Home}/>
      	<Route path="tech" component={Tech}/>
      	<Route path="recipe" component={Recipe}/>

      { /* Catch all routes */ }      
      <Route path="*" component={NotFound} status={404} />

    </Route>
)