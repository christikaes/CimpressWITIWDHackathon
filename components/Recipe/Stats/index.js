import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { update } from '../../../actions'
import ContentEditable from 'react-contenteditable'
import styles from './styles.css'
import {Glyphicon} from 'react-bootstrap'

const Stats = React.createClass({
  updatePrepTime: function(evt){
    const {update} = this.props;
    update("prepTime", evt.target.value);
  },

  updateCookTime: function(evt){
    const {update} = this.props;
    update("cookTime", evt.target.value);
  },

  updateServings: function(evt){
    const {update} = this.props;
    update("servings", evt.target.value);
  },

  updateCalories: function(evt){
    const {update} = this.props;
    update("calories", evt.target.value);
  },

  render: function(){
    const {recipe} = this.props;
    return(
      <div className={styles.stats}>
        <div className={styles.prepTime}>
          <Glyphicon glyph="hourglass" className={styles.glyph}/>
          <ContentEditable html={recipe.prepTime} disabled={false} onChange={this.updatePrepTime} />
          <div>to Prep</div>
        </div>
        <div className={styles.cookTime}>
          <Glyphicon glyph="hourglass" className={styles.glyph}/>
          <ContentEditable html={recipe.cookTime} disabled={false} onChange={this.updateCookTime} />
          <div>to Cook</div>
        </div>
        <div className={styles.servings}>
          <Glyphicon glyph="cutlery" className={styles.glyph}/>
          <ContentEditable html={recipe.servings} disabled={false} onChange={this.updateServings} />
          <div>servings</div>
        </div>
        <div className={styles.calories}>
          <Glyphicon glyph="fire" className={styles.glyph}/>
          <ContentEditable html={recipe.calories} disabled={false} onChange={this.updateCalories} />
          <div>calories</div>
        </div>
      </div>) 
  }
});

Stats.propTypes = {
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
)(Stats)
