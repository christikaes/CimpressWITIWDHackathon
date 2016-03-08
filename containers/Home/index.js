import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import styles from './styles.css' 
import {CountDown} from '../../components';

const Home = React.createClass({
  render: function() {
    return (
	<div>
	<Grid>
	    <Row>
	    	<Col xs={1}>
	    		<img id="logo" src={require("../../img/CWIT_Logo-Cimpress.png")} alt="WIT_logo" width="50" height="80" />
	    	</Col>
	    	<Col xs={11}>
	    		<h1>  International Women's Day is on March 8th!</h1>
	    	</Col>
	    </Row>
	    <Row>
	      <Col xs={12} className={styles.main}>
	 		  <p>
			  To celebrate in all of our international offices, WIT will be building a global cookbook comprising of recipes from around the world. 
			  To accomplish this, we need submissions by WIT members and their supporters from all of our offices. And to make it more fun, we are also requesting submissions for a TechPage.
			  </p>
			  <p>
			  With a submission, you will receive an entry to one of our raffles as well as a copy of the finalized cookbook! We will hold a raffle for Recipe submissions and another for Tech Page submissions.
			  Multiple submissions are allowed and you will receive an additional raffle entry for the category that you had submitted to. The winners of each raffle will win a trip to the upcoming Grace Hopper Conference in Houston Texas!* 
			  </p>
			  <p>
			  <b> Note: Please keep submissions in English. If you need help in translating your recipe or tech page prior to submission, contact the <a href="mailto:WITExternalConnectionsCommitee@cimpress.com?Subject=WIT%20IWD%20Question" target="_top">WITExternalConnectionsCommitee</a>.</b>
			  </p>
	      </Col>
	    </Row>
	    <Row>
	      <Col xs={12}>
	      		<h2>Timeline </h2>
				<h3>
					<CountDown />				
				</h3>
	      </Col>
	    </Row>
	    <Row>
		<br/>
	      <Col xs={12} md={5} className={styles.submission}>
	          <img src={require("../../img/recipe.png")} alt="Recipe image" width="100" height="100" />
	          <h2>Recipe</h2>
	          <p>Submit your favorite recipe, a unique cultural specialty, or something for fun! </p>
	          <LinkContainer to="/recipe">
	            <Button>Learn More</Button>
	          </LinkContainer>
	      </Col>
		   <Col xs={1}> </Col>
	      <Col xs={12} md={5} className={styles.submission}>
	          <img src={require("../../img/puzzle.png")} alt="Puzzle image" width="100" height="100" />
	          <h2>Tech Page</h2>
	          <p>Submit an interesting article on an innovative technology or a fun yet challenging puzzle!</p>
	          <LinkContainer to="/tech">
	            <Button>Learn More</Button>
	          </LinkContainer>
	      </Col>
		  <Col xs={1}> </Col>
	    </Row>	
	</Grid>
	<p className={styles.footer}>
				*To learn more about the Grace Hopper Conference, visit the <a href="http://ghc.anitaborg.org/" target="_top">main site</a>. The trip to the Grace Hopper Conference will include admission to 3 days of the conference, hotel, and flight. <br/>
				For more details email the <a href="mailto:WITExternalConnectionsCommitee@cimpress.com?Subject=WIT%20IWD%20Question" target="_top">WITExternalConnectionsCommitee</a>.
	</p>
	</div>)
  }
})

export default Home;