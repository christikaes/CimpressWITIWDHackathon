import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { update } from '../../../actions'
import ContentEditable from 'react-contenteditable'
import styles from './styles.css'

const RecipeDirections = React.createClass({
  updateDirections: function(evt){
    const {update} = this.props;
    update("directions", evt.target.value);
  },

  render: function(){
    const {recipe} = this.props;
    return(
      <div className={styles.container}>
        <ContentEditable  className={styles.directions} html={recipe.directions} disabled={false} onChange={this.updateDirections} />
      </div>) 
  }
});

RecipeDirections.propTypes = {
  update: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.present
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ update }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RecipeDirections)
