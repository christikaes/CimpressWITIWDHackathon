import React from 'react'
import {Recipe, RecipeSave, RecipeUndoRedo} from '../../components'
import styles from './styles.css' 

// Notes: http://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable

const RecipeEditor = React.createClass({
  render: function() {
    return (
      <div className={styles.recipe}>
        <h1>Recipe</h1>

        <Recipe />

        <RecipeSave />

        <RecipeUndoRedo />

      </div>
    )
  }
})

export default RecipeEditor;