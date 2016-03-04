import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const Home = React.createClass({
  render: function() {
    return (
	<Grid>
	    <Row>
	    	<Col xs={4}>
	    		<img id="logo" class="two-columns" src="/lib/img/CWIT_Logo-Cimpress.png" alt="WIT_logo" />
	    	</Col>
	    	<Col xs={8}>
	    		<h1>Women In Technology Celebrates International Women's Day!</h1>
	    	</Col>
	    </Row>
	    <Row>
	      <Col xs={12}>
	      	  <h2>International Women's Day is on <span>March 8th!</span></h2>		  
			  <p>To celebrate, we will be creating a global cookbook consisting of recipes submitted by WIT members from Cimpress offices all over the world.
			  Everyone who submits a Recipe or a Tech Page will get a copy of the cookbook!
			  Anyone who submits a Tech Page will be entered in a raffle.
			  </p>
	      </Col>
	    </Row>
	    <Row>
	      <Col xs={12}>
	      		<h2>Timeline </h2>
	        	<p>Submission Starts: <span> March 8, 2016 </span>
	        	Submission Ends: <span> March 31, 2016 </span> </p>
	      </Col>
	    </Row>
	    <Row>
	      <Col xs={12} md={6}>
	          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
	          <h2>Recipe</h2>
	          <p>Submit your favorite recipe, a unique cultural specialty, or something for fun! </p>
	          <LinkContainer to="/recipe">
	            <Button>Learn More</Button>
	          </LinkContainer>
	      </Col>
	      <Col xs={12} md={6}>
	          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
	          <h2 class="feature-heading">Tech Page</h2>
	          <p class="lead">Submit an interesting article on an innovative technology or a fun yet challenging puzzle!</p>
	          <LinkContainer to="/tech">
	            <Button>Learn More</Button>
	          </LinkContainer>
	      </Col>
	    </Row>
	</Grid>);
  }
})

export default Home;