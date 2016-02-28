import React from 'react'
import {RecipeSave, RecipeHeader, RecipeProfile, RecipeUndoRedo} from '../../components'

// Notes: http://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable

const Recipe = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Recipe</h1>

        <RecipeHeader />

        <RecipeProfile />

        <RecipeSave />

        <RecipeUndoRedo />

      </div>
    )
  }
})

export default Recipe;