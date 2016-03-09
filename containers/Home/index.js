import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import styles from './styles.css' 
import {CountDown} from '../../components';

const Home = React.createClass({
  render: function() {
    return (
	<div>
      <div  className={styles.container}>
	  <Grid>
        <Row>
            <Col xs={12} className={styles.title}>
                <div className={styles.presents}>
                    In celebration of International Women's Day and Women's History Month, we present
                </div>
                <div>
                    WIT Global Cookbook
                </div>
            </Col>
        </Row>
	    <Row>
	      <Col xs={12}>
			<h3>
				<CountDown />				
			</h3>
	      </Col>
	    </Row>
	    <Row>
	      <Col xs={12} md={5} className={styles.submission}>
	          <LinkContainer to="/tech">
                <img src={require("../../img/code.png")} alt="Code image" width="150" height="150" />
              </LinkContainer>
	          <h2>Tech Page</h2>
	          <p>Submit an interesting article on an innovative technology or a fun yet challenging puzzle!</p>
	          <LinkContainer to="/tech">
	            <Button>Learn More</Button>
	          </LinkContainer>
	      </Col>
          <Col xsHidden md={2} className={styles.or}>
            or
          </Col>
          <Col xs={12} md={5} className={styles.submission}>
              <LinkContainer to="/recipe">
                <img src={require("../../img/recipe.png")} alt="Recipe image" width="150" height="150" />
              </LinkContainer>
              <h2>Recipe</h2>
              <p>Submit your favorite recipe, a unique cultural specialty, or something for fun! </p>
              <LinkContainer to="/recipe">
                <Button>Learn More</Button>
              </LinkContainer>
          </Col>
	    </Row>
			    <Row>
	      <Col xs={12} className={styles.main}>
	 		  <p> To commemorate these worldwide events, <a href="https://corewiki.cimpress.net/wiki/Women_In_Technology" target="_blank">Women In Technology</a>  is launching its very first global project: "Cimprecipes". Food represents so much in human culture and history. It’s indicative of our ancestry, the cornerstone of family traditions, and generally something that brings people together. 
			  We thought that one way to connect our international offices would be to assemble “Cimprecipes”; a collection of favorite recipes from all corners of Cimpress.
			  We need submissions from WIT members and their supporters to build this global cookbook. And to make it more fun, we are also requesting submissions for a TechPage.

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
		<div className={styles.footer}>
			*To learn more about the Grace Hopper Conference, visit the <a href="http://ghc.anitaborg.org/" target="_top">main site</a>. The trip to the Grace Hopper Conference will include admission to 3 days of the conference, hotel, and flight. <br/>
			For more details email the <a href="mailto:WITExternalConnectionsCommitee@cimpress.com?Subject=WIT%20IWD%20Question" target="_top">WITExternalConnectionsCommitee</a>.
		</div>
      </Grid>
      </div>
	</div>
	)
  }
})

export default Home;