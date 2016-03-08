import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { fetchSaveIfNeeded, fetchRetrieveIfNeeded } from '../../../actions'
import {Button, Glyphicon} from 'react-bootstrap'
import stylesDimensions from '../../../commonStyles/dimensions.css'

class Save extends Component {

  render() {
    const {fetchSaveIfNeeded, fetchRetrieveIfNeeded, recipe} = this.props;

    return (
      <div>
        <Button bsSize="large" className={stylesDimensions.squareButton} onClick={fetchSaveIfNeeded.bind(this, recipe)}>
          <Glyphicon glyph="floppy-save" /> <br/>
          Save
        </Button>
        <Button bsSize="large" className={stylesDimensions.squareButton} href="//FreeHTMLtoPDF.com/?convert&iconsize=32&formdata=1">
          <Glyphicon glyph="file" /> <br/>
          Pdf
        </Button>
      </div>
    )
  }
}

Save.propTypes = {
  fetchSaveIfNeeded: PropTypes.func.isRequired,
  fetchRetrieveIfNeeded: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.present
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchSaveIfNeeded, fetchRetrieveIfNeeded }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Save)
