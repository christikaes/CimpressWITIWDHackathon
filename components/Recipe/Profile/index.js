import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { save, update } from '../../../actions'

class Profile extends Component {

  render() {
    const {save, update, recipe} = this.props
    let num =  recipe.x ? recipe.x + 1 : 1;

    return (
      <div>
        <div className="profile">
            <div className="profile-info">
              <div className="name" > Full Name </div>
              <div className="company" > Company, City </div>
            </div>
            <div className="profile-picture">
              <div className="picture"></div>
            </div>
        </div>

  	    <button onClick={update.bind(this, num)}>
  	      Update
  	    </button>
      </div>
    )
  }
}

Profile.propTypes = {
  save: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
  	// TODO: Could there be bugs here?
    recipe: state.recipe.present
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ save, update }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile)
