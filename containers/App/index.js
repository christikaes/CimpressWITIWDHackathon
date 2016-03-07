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
        <a href="http://api.html2pdfrocket.com/pdf?value=http://ec2-52-26-116-243.us-west-2.compute.amazonaws.com:3000&apikey=ef82f568-7282-4d99-adf0-7f2b936f20ae">Download PDF</a>
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