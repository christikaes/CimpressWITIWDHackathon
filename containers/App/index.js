import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../components'

class App extends Component {
  render() {
    return (
      <div>
        
        <NavBar />
                
        <div >
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App

