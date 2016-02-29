import React from 'react'
import {RecipeSave, RecipeUndoRedo, RecipeNext} from '../../'
import styles from './styles.css' 
import {ButtonGroup} from 'react-bootstrap'

// Notes: http://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable

const RecipeEditor = React.createClass({
  render: function() {
    return (
      <div className={styles.toolbar}>
        
	        <RecipeSave />

	        <RecipeUndoRedo />
	      	
	        <RecipeNext />
	    
      </div>
    )
  }
})

export default RecipeEditor;