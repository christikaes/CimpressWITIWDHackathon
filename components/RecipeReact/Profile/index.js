import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { update } from '../../../actions'
import ContentEditable from 'react-contenteditable'

const Profile = React.createClass({

  updateName: function(evt){
    const {update} = this.props;
    update("fullName", evt.target.value);
  },

  render: function(){
    const {recipe} = this.props;
    return(
      <div>
        <ContentEditable html={recipe.fullName} disabled={false} onChange={this.updateName} />
      </div>) 
  }
});

Profile.propTypes = {
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
)(Profile)
