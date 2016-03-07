import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {Recipe, RecipeToolBar, Loading} from '../../components'
import { fetchRetrieveIfNeeded } from '../../actions'
import styles from './styles.css' 

// Notes: http://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable

const RecipeEditor = React.createClass({
  componentDidMount: function() {
  	console.log("HERE")
  	const {fetchRetrieve} = this.props;
  	let id = "d73bee8d817f11104c7ac98fc8f465f7"
    // dispatch(fetchRetrieveIfNeeded(id, true));
  },

  render: function() {
    return (
      <div className={styles.recipe}>
      	<Loading />

        <Recipe />

        <RecipeToolBar />
      
      </div>
    )
  }
})


RecipeEditor.propTypes = {
  fetchRetrieveIfNeeded: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRetrieveIfNeeded }, dispatch);
}

export default connect(
	mapDispatchToProps
)(RecipeEditor)