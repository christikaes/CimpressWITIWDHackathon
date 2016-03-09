import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Alert, Input, ButtonInput} from 'react-bootstrap';

import styles from './styles.css' 

const RecipeSubmission = React.createClass({
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
				<h2>Submit your Recipe</h2>
                <p className="small"> <b>*All fields are required.</b></p>
                <form onSubmit={this.submit} ref="form">
                    <Input type="text" name="firstName" label="First Name" placehlider="Jane" ref="firstName" required />
                    <Input type="text" name="lastName" label="Last Name" placehlider="Doe" ref="lastName" required />
                    <Input type="email" name="email" label="Office Email Address" placehlider="jdoe@cimpress.com" ref="email" required/>
                    <Input type="file" accept="image/*" name="profilePicture" label="Profile Picture" help="Upload your profilePicture here" ref="file" required/>
                    <ButtonInput type="submit" value="Submit Recipe" bsStyle="primary"/>
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

        xmlhttp.open('POST', window.location.origin + "/recipe-submission", true);

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

export default RecipeSubmission;

// TODO:
//      Validation
//      Set rules (with multer) for file types and size limits