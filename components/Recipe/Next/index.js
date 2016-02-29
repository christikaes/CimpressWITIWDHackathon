import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { save } from '../../../actions'
import {Button, Glyphicon} from 'react-bootstrap'

class Next extends Component {

  render() {
    const {save, recipe} = this.props;

    return (
      <div>
        <Button bsSize="large" onClick={save.bind(this, recipe)}>
          <Glyphicon glyph="arrow-right" /> 
          Next
        </Button>
      </div>
    )
  }
}

Next.propTypes = {
  save: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.present
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ save }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Next)
