import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavBar, Loading } from '../../components'
import styles from './styles.css'

    
const App = React.createClass({
  render: function() {
    return (
	 <div>   
        <div className = {styles.logo}>
		<img id="logo" src={require("../../img/CWIT_Logo-Cimpress.png")} alt="WIT_logo" width="40" height="60" />
		</div>
		<div>
	    <h1 className = {styles.title}>Women In Technology Celebrates International Women's Day!</h1>              
        </div>
		<NavBar/>
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