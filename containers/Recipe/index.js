import React, { Component, PropTypes, setState } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { save, update } from '../../actions'
import {RecipeSave, RecipeHeader, RecipeProfile} from '../../components'

// Notes: http://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable

export default class Recipe extends Component {

  render() {
    return (
      <div>
        <h1>Recipe</h1>

        <RecipeHeader />

        <RecipeProfile />

        <RecipeSave />

      </div>
    )
  }
}