import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import {Nav, NavItem} from 'react-bootstrap/lib'
// We need to use linkContainer because react-router link doesn't work with bootstrap
// and using href causes the page to reload
import { LinkContainer } from 'react-router-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Nav bsStyle="pills" activeKey={1}>
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
    )
  }
}