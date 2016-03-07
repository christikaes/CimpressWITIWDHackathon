import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavBar, Loading } from '../../components'
import styles from './styles.css'

        // <NavBar />
const App = React.createClass({
  render: function() {
    return (
      <div>
        <a href="http://FreeHTMLtoPDF.com/?convert">Download as PDF</a>
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