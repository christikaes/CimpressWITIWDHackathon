import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { fetchSaveIfNeeded } from '../../../actions'
import {Button, Glyphicon} from 'react-bootstrap'
import stylesDimensions from '../../../commonStyles/dimensions.css'

class Next extends Component {

  render() {
    const {fetchSaveIfNeeded, recipe} = this.props;

    return (
      <div>
        <Button bsSize="large" className={stylesDimensions.squareButton} onClick={fetchSaveIfNeeded.bind(this, (recipe,true))}>
          <Glyphicon glyph="arrow-right" /> <br/>
          Next
        </Button>
      </div>
    )
  }
}

Next.propTypes = {
  fetchSaveIfNeeded: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.present
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchSaveIfNeeded }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Next)
