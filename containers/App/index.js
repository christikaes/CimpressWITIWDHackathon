import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../components'
import styles from './styles.css'

const App = React.createClass({
  render: function() {
    return (
      <div>
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