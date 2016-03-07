import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import styles from './styles.css' 

var CountDown = require('react-count-down');

var OPTIONS = { endDate: '03/31/2016 11:59 PM', prefix: 'until submission ends! (in EST)' }

const Home = React.createClass({
  render: function() {
    return (
	<Grid>
	    <Row>
	    	<Col xs={1}>
	    		<img id="logo" src={require("../../node_modules/image/CWIT_Logo-Cimpress.png")} alt="WIT_logo" width="70" height="100" />
	    	</Col>
	    	<Col xs={11}>
	    		<h1>Women In Technology Celebrates International Women's Day!</h1>
	    	</Col>
	    </Row>
	    <Row>
	      <Col xs={12}>
	      	  <h2>International Women's Day is on <span>March 8th!</span></h2>		  
			  <p>To celebrate, we will be creating a global cookbook consisting of recipes submitted by WIT members from Cimpress offices all over the world.
			  Everyone who submits a Recipe or a Tech Page will get a copy of the cookbook and will also be entered into a raffle.
			  </p>
	      </Col>
	    </Row>
	    <Row>
	      <Col xs={12}>
	      		<h2>Timeline </h2>
				<h3 className={styles.countdowntimer}>
					<CountDown options={OPTIONS}  />				
				</h3>
	      </Col>
	    </Row>
	    <Row>
	      <Col xs={12} md={6}>
	          <img src={require("../../node_modules/image/recipe.png")} alt="Recipe image" width="140" height="140" />
	          <h2>Recipe</h2>
	          <p>Submit your favorite recipe, a unique cultural specialty, or something for fun! </p>
	          <LinkContainer to="/recipe">
	            <Button>Learn More</Button>
	          </LinkContainer>
	      </Col>
	      <Col xs={12} md={6}>
	          <img src={require("../../node_modules/image/puzzle.png")} alt="Puzzle image" width="140" height="140" />
	          <h2>Tech Page</h2>
	          <p>Submit an interesting article on an innovative technology or a fun yet challenging puzzle!</p>
	          <LinkContainer to="/tech">
	            <Button>Learn More</Button>
	          </LinkContainer>
	      </Col>
	    </Row>
	</Grid>);
  }
})

export default Home;