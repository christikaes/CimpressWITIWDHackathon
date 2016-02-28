import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { update } from '../../../actions'
import ContentEditable from 'react-contenteditable'
import styles from './styles.css'

const Header = React.createClass({

  updateTitle: function(evt){
    const {update} = this.props;
    update("title", evt.target.value);
  },

  updateSubTitle: function(evt){
    const {update} = this.props;
    update("subtitle", evt.target.value);
  },

  render: function(){
    const {recipe} = this.props;
    return(
      <div>
        <ContentEditable className={styles.title} html={recipe.title} disabled={false} onChange={this.updateTitle} />
        <ContentEditable className={styles.subtitle} html={recipe.subtitle} disabled={false} onChange={this.updateSubTitle} />
      </div>) 
  }
});

Header.propTypes = {
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
)(Header)
