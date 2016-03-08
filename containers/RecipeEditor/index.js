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

        <div>
          <h1> Recipe Editor </h1>
          <div>
            Submit the recipe that you want to share using the form below:
          </div>
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