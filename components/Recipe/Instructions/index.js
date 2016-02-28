import React from 'react'
import { RecipeIngredients, RecipeDirections} from '../../'
import styles from './styles.css'

const RecipeInstructions = React.createClass({
  render: function() {
    return (
      <div className={styles.instructions}>
        <div className={styles.ingredients}>
          <RecipeIngredients />
        </div>
        <div className={styles.directions}>
          <RecipeDirections />
        </div>
      </div>
    )
  }
})

export default RecipeInstructions;