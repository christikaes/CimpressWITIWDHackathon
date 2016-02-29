import React from 'react'
import {RecipeHeader, RecipeInstructions, RecipeStats} from '../../'
import styles from './styles.css' 

const RecipeContent = React.createClass({
  render: function() {
    return (
      <div className={styles.recipe}>  
        <div className={styles.header}>
        	<RecipeHeader />
        </div>
        <div className={styles.instructions}>
        	<RecipeInstructions />
        </div>
        <div className={styles.stats}>
          <RecipeStats />
        </div>
      </div>
    )
  }
})

export default RecipeContent;