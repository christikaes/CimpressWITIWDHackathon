import React from 'react'
import {RecipeContent, RecipeProfile} from '../'
import styles from './styles.css' 

const Recipe = React.createClass({
  render: function() {
    return (
      <div className={styles.recipe}>  
      	<div className={styles.contentContainer}> 
	      	<div className={styles.foodImgLeft}></div>
	        
	        <div className={styles.recipeContentContainer}>
	        	<RecipeContent />
	        </div>

	        <div className={styles.foodImgRight}></div>
      	</div>
      	<div className={styles.profileContainer}>
        	<RecipeProfile />
      	</div>
      
      </div>
    )
  }
})

export default Recipe;