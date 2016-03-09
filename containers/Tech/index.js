import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Alert, Input, ButtonInput} from 'react-bootstrap';

import styles from './styles.css' 

const Tech = React.createClass({
    getInitialState: function() {
        return {
            showStatusMessage: false,
            statusMessage: "",
            statusType: "info",
            submitting: false
        }
    },

    render: function() {
        return (
            <Grid>
                <h2>What is a Tech Page?</h2>
                <p className="lead">
			A Tech Page is a page that consists of a puzzle attached with its answer, interesting facts/images, or an article, all relating to technology. 
			It’s a fun little page for the chef to enjoy as they are waiting for something to cook. <a target="_blank" href={require("../../public/techPageExample.pdf")}>Click here for an example!</a>							
		</p>
				 <hr/>
				<h2> Guidelines: </h2>
				<ol>
				<li className={styles.listitem}> The page must be a <b>PDF</b> file. </li>
				<li className={styles.listitem}> The page must have dimensions of <b>21cm x 21cm</b> at a resolution of <b>300 DPI</b> (in pixels: 2480px x 2480px).<br/>
				(<b>Note:</b> Your name, office location, bio, and photo will be included in a sidebar beside your page.)</li>
				<li className={styles.listitem}> The total file size for PDFs and photos must <b>not exceed 5MB</b> each.</li>
				<li className={styles.listitem}> The content must have a techy piece to it (a puzzle or article).</li>
				<li className={styles.listitem}> If the content has an <b>article</b> that you have not written yourself, then you must include a source to credit the original author.</li>
				<li className={styles.listitem}> If the content has a <b>puzzle</b>, then you must include the answer upside down on the bottom of the page.</li>
                </ol>
                 <hr/>
                <h2>Submit a Tech Page</h2>
                <p className="small"> <b>*All fields are required.</b></p>
                <Message 
                    visibilityClass={this.state.showStatusMessage ? "show" : "hidden"}
                    statusMessage={this.state.statusMessage}
                    statusType={this.state.statusType}
                    onDismiss={this.handleAlertDismiss}
                />
                <form onSubmit={!this.state.submitting ? this.submit : null} ref="form">
                    <Input type="text" name="firstName" label="First Name" placeholder="Jane" ref="firstName" required />
                    <Input type="text" name="lastName" label="Last Name" placeholder="Doe" ref="lastName" required />
                    <Input type="email" name="email" label="Office Email Address" placeholder="janedoe@cimpress.com" ref="email" required/>
                    <Input type="text" name="businessUnit" label="Business Unit" placeholder="Vistaprint" ref="businessUnit" required/>
                    <Input type="text" name="office" label="Office Location" placeholder="Waltham, USA" ref="office" required/>
                    <Input type="textarea" name="bio" label="Bio" ref="bio" rows="3" maxLength="325" help="Max 325 characters." required/>
                    <Input type="file" name="photo" label="Your Photo" help="Please provide a photo of yourself to be included with your submission (jpg, gif, or png; 5MB max)." ref="file" required/>
                    <Input type="file" name="techPage" label="Tech page PDF" help="21x21cm, 300 DPI. 5MB max." ref="file" required/>
                    <ButtonInput type="submit" disabled={this.state.submitting} value={!this.state.submitting ? "Submit Tech Page" : "Submitting your entry..."} bsStyle="primary"/>
                </form>
            </Grid>

        )
    },
    submit: function(e) {
        e.preventDefault();

        var form = ReactDOM.findDOMNode(this.refs.form);
        var formData = new FormData(form);
        var xmlhttp = new XMLHttpRequest();
        var _this = this;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
                // console.log(xmlhttp.responseText);
                _this.setState({
                    submitting: false
                })
                if (xmlhttp.status === 200) {
                    // console.log("OK");
                    _this.setState({
                        showStatusMessage: true,
                        statusMessage: "Your entry has been submitted successfully!",
                        statusType: "success"
                    });
                    form.reset();
                }
                else {
                    // console.log("not OK");
                    _this.setState({
                        showStatusMessage: true,
                        statusMessage: "Whoops, that didn't work! Please try again or contact the WIT External Connections Commitee at WITExternalConnectionsCommitee@cimpress.com.",
                        statusType: "danger"
                    });
                }
            }
        };

        xmlhttp.open('POST', window.location.origin + "/tech-form", true);
        this.setState({
            submitting: true
        });
        xmlhttp.send(formData);
    },
    handleAlertDismiss: function() {
        this.setState({ showStatusMessage: false });
    }
});

var Message = React.createClass({
    render: function() {
        return (
            <Alert bsStyle={this.props.statusType} className={this.props.visibilityClass} onDismiss={this.props.onDismiss}>
                {this.props.statusMessage}
            </Alert>
        )
    }
});

export default Tech;
