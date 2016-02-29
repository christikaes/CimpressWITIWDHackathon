import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import {Button, Glyphicon} from 'react-bootstrap'
import stylesDimensions from '../../../commonStyles/dimensions.css'
import styles from './styles.css'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div className={styles.center}>
    <Button bsSize="large" className={stylesDimensions.squareButton} onClick={onUndo} disabled={!canUndo}>
      <Glyphicon glyph="backward" /> <br/>
      Undo
    </Button>
    <Button bsSize="large" className={stylesDimensions.squareButton} onClick={onRedo} disabled={!canRedo}>
      <Glyphicon glyph="forward" /> <br/>
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
