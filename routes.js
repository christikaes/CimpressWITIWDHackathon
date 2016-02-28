import React from 'react'
import { IndexRoute, Route } from 'react-router'

import {
	App,
	NotFound,
	Home,
	Tech,
	RecipeEditor
} from './containers';

export default (
  	<Route path="/" component={App}>
        { /* Home (main) route  */ }
  		<IndexRoute component={Home}/>

      { /* Routes */ }
       	<Route path="home" component={Home}/>
      	<Route path="tech" component={Tech}/>
      	<Route path="recipe" component={RecipeEditor}/>

      { /* Catch all routes */ }      
      <Route path="*" component={NotFound} status={404} />

    </Route>
)