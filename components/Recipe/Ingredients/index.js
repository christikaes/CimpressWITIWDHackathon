import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { update } from '../../../actions'
import ContentEditable from 'react-contenteditable'
import styles from './styles.css'
import {Glyphicon} from 'react-bootstrap'

const RecipeIngredients = React.createClass({
  updateIngredients: function(evt){
    const {update} = this.props;
    update("ingredients", evt.target.value);
  },

          // <Glyphicon glyph="shopping-cart" />
  render: function(){
    const {recipe} = this.props;
    return(
      <div className={styles.container}>
        <div className={styles.header}>
          <div>Ingredients</div>
        </div>
        <ContentEditable  className={styles.ingredients} html={recipe.ingredients} disabled={false} onChange={this.updateIngredients} />
      </div>) 
  }
});

RecipeIngredients.propTypes = {
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
)(RecipeIngredients)
