import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../components'
import styles from './styles.css'

class App extends Component {
  render() {
    return (
      <div className={styles.test}>

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

