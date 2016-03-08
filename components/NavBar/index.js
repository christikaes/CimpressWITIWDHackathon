import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap/lib'
// We need to use linkContainer because react-router link doesn't work with bootstrap
// and using href causes the page to reload
import { LinkContainer } from 'react-router-bootstrap';
import styles from './styles.css'

export default class NavBar extends Component {
  render() {
    return (
       <Navbar>
        <Navbar.Header>
          <Navbar.Brand className={styles.navBrand}>
            <LinkContainer to="/home">
              <div>
                <img className={styles.logo} src={require("../../img/CWIT_Logo-Cimpress.png")} alt="WIT_logo" width="20" height="30" />
                <div className={styles.title}> Cimpress Women In Technology </div>
              </div>
            </LinkContainer>
            
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight activeKey={1}>
            <LinkContainer to="/home">
                <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/tech">
                <NavItem eventKey={2}>Tech</NavItem>
            </LinkContainer>
            <LinkContainer to="/recipe">
                <NavItem eventKey={3}>Recipe</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}