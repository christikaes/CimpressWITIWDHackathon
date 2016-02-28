import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { save, update } from '../../../actions'

class Save extends Component {

  render() {
    const {save, update, recipe} = this.props
    let num =  recipe.x ? recipe.x + 1 : 1;

    return (
      <div>
        <button onClick={save.bind(this, recipe)}>
  	      Save
  	    </button>

  	    <button onClick={update.bind(this, num)}>
  	      Update
  	    </button>
      </div>
    )
  }
}

Save.propTypes = {
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
)(Save)
