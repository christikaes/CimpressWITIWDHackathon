import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import {Button, Glyphicon} from 'react-bootstrap'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div>
    <Button bsSize="large" onClick={onUndo} disabled={!canUndo}>
      <Glyphicon glyph="backward" /> 
      Undo
    </Button>
    <Button bsSize="large" onClick={onRedo} disabled={!canRedo}>
      <Glyphicon glyph="forward" /> 
      Redo
    </Button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    canUndo: state.recipe.past.length > 0,
    canRedo: state.recipe.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
