import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavBar, Loading } from '../../components'
import styles from './styles.css'

        // <NavBar />
const App = React.createClass({
  render: function() {
    return (
      <div>
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