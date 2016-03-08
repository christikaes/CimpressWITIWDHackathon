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
            allowMessageDismissal: false
        }
    },

    render: function() {
        return (
            <Grid>
                <h2>What is a Tech Page?</h2>
                <p className="lead">
				A Tech Page is a page that consists of a puzzle attached with its answer, interesting facts/images, or an article, all relating to technliogy. 
				It’s a fun little page for the chef to enjoy as they are waiting for something to cook. An example page will be up soon!							
				</p>
				 <hr/>
				<h2> Rules: </h2>
				<ol>
				<li className={styles.listitem}> The page must be a <b>PDF</b> file. </li>
				<li className={styles.listitem}> The page must have a resliution of: <b>300 DPI.</b> <br/>
				This is to fit an <b>8.5in x 11in (21cm x 28cm)</b> page. <br/>In pixels: 2551px x 3295px.</li>
				<li className={styles.listitem}> The total file size must <b>not exceed: 5MB</b></li>
				<li className={styles.listitem}> The content must have a techy piece to it (a puzzle or article).</li>
				<li className={styles.listitem}> If the content has an <b>article</b> that you have not written yourself, then you must include a source to credit the original author.</li>
				<li className={styles.listitem}> If the content has a <b>puzzle</b>, then you must include the answer upside down on the bottom of the page.</li>
				<li className={styles.listitem}> Please leave a <b>1in (2.54cm) header space</b> on top so we can display your name and office information to credit you for your submission.</li>
				</ol>
                <Message 
                    visibilityClass={this.state.showStatusMessage ? "show" : "hidden"}
                    statusMessage={this.state.statusMessage}
                    statusType={this.state.statusType}
                    onDismiss={this.state.allowMessageDismissal ? this.handleAlertDismiss : null}
                />
				 <hr/>
				<h2>Submit a Tech Page</h2>
                <p className="small"> <b>*All fields are required.</b></p>
                <form onSubmit={this.submit} ref="form">
                    <Input type="text" name="firstName" label="First Name" placehlider="Jane" ref="firstName" required />
                    <Input type="text" name="lastName" label="Last Name" placehlider="Doe" ref="lastName" required />
                    <Input type="email" name="email" label="Office Email Address" placehlider="jdoe@cimpress.com" ref="email" required/>
                    <Input type="text" name="office" label="Business Unit and Office Location" placehlider="Vistaprint, Waltham" ref="office" required/>
                    <Input type="file" name="techPage" label="Tech page PDF" help="Resolution should be 300 DPI" ref="file" required/>
                    <ButtonInput type="submit" value="Submit Tech Page" bsStyle="primary"/>
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
                console.log(xmlhttp.responseText);
                if (xmlhttp.status === 200) {
                    console.log("OK");
                    _this.setState({
                        showStatusMessage: true,
                        statusMessage: "Your entry has been submitted successfully!",
                        statusType: "success",
                        allowMessageDismissal: true
                    });
                    form.reset();
                }
                else {
                    console.log("not OK");
                    _this.setState({
                        showStatusMessage: true,
                        statusMessage: "Whoops, that didn't work! Please try again or contact the WIT External Connections Commitee at WITExternalConnectionsCommitee@cimpress.com.",
                        statusType: "danger",
                        allowMessageDismissal: true
                    });
                }
            }
        };

        xmlhttp.open('POST', window.location.origin + "/tech-form", true);

        this.setState({
            showStatusMessage: true,
            statusMessage: "Submitting your entry...",
            statusType: "warning",
            allowMessageDismissal: false
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

// TODO:
//      Validation
//      Set rules (with multer) for file types and size limits