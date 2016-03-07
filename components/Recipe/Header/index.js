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

  updateCaption: function(evt){
    const {update} = this.props;
    update("caption", evt.target.value);
  },

  render: function(){
    console.log("renda")
    const {recipe} = this.props;
    console.log(recipe)
    return(
      <div className={styles.header}>
        <div className={styles.title}>
          <ContentEditable html={recipe.title} disabled={false} onChange={this.updateTitle} />
        </div>
        <div className={styles.caption}> 
          <ContentEditable html={recipe.caption} disabled={false} onChange={this.updateCaption} />
        </div>
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
