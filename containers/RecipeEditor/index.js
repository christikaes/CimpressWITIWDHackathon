import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {Recipe, RecipeSubmission, RecipeToolBar, Loading} from '../../components'
import { fetchRetrieveIfNeeded } from '../../actions'
import styles from './styles.css' 

const RecipeEditor = React.createClass({
  componentDidMount: function() {
  	const {id} = this.props.params;
  	if(id){
	  	const {fetchRetrieveIfNeeded} = this.props;
	  	fetchRetrieveIfNeeded(id, true);
  	}
  },

  render: function() {
    return (
      <div className={styles.recipe}>
      	<Loading />

        <div className={styles.heading}>
          <h1> Recipe Editor </h1>
          <p>
            Submit the recipe that you want to share using the interactive preview below. 
            It is currently filled with example mock data, simply mouse over the fields and
            change the values to reflect your recipe!
          </p>
          <p>
            You can hit 'Save' any time to save your document. This will update the page's 
            url and if you load the page with the new url your document will be saved.
            You can hit 'PDF' any time to get your recipe's preview. This is what the recipe 
            will look like when we print it (after we do some final checks).
          </p>
          <p>
            When you are done editing your recipe, fill out the form at the bottom of this page to submit it!
          </p>
        </div>

        <Recipe />

        <RecipeSubmission />

        <RecipeToolBar />
      
      </div>
    )
  }
})


RecipeEditor.propTypes = {
  fetchRetrieveIfNeeded: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.present
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRetrieveIfNeeded }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RecipeEditor)