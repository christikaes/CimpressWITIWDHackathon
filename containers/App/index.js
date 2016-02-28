import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../components'

import AddTodo from '../AddTodo.js'

const App = React.createClass({
  render: function() {
    return (
      <div>
        <AddTodo />
        <NavBar />
        
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
})

App.propTypes = {
  children: PropTypes.node
}

export default App

