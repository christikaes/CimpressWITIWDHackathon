import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { update } from '../../../actions'
import ContentEditable from 'react-contenteditable'
import styles from './styles.css'

var Header = React.createClass({

  handleChange: function(evt){
    const {update} = this.props;
    console.log("handleChange")
    update(parseInt(evt.target.value))
  },

  render: function(){
    const {recipe} = this.props;
    return(
      <div className={styles.test}>
        <ContentEditable
                html={recipe.x} // innerHTML of the editable div
                disabled={false}       // use true to disable edition
                onChange={this.handleChange} // handle innerHTML change
              />
      </div>) 
  }
});

Header.propTypes = {
  update: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
  	// TODO: Could there be bugs here?
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
