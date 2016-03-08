import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Alert, Input, ButtonInput} from 'react-bootstrap';

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
                <h1>Submit a Tech Page</h1>
                <p className="lead">Some intro text should go here, with an explanation of what this is and links to the rules and stuff.</p>
                <Message 
                    visibilityClass={this.state.showStatusMessage ? "show" : "hidden"}
                    statusMessage={this.state.statusMessage}
                    statusType={this.state.statusType}
                    onDismiss={this.state.allowMessageDismissal ? this.handleAlertDismiss : null}
                />
                <p className="small">All fields are required.</p>
                <form onSubmit={this.submit} ref="form">
                    <Input type="text" name="firstName" label="First Name" placeholder="Jane" ref="firstName" required />
                    <Input type="text" name="lastName" label="Last Name" placeholder="Doe" ref="lastName" required />
                    <Input type="email" name="email" label="Email Address" placeholder="jdoe@cimpress.com" ref="email" required/>
                    <Input type="text" name="office" label="Business Unit and Office Location" placeholder="Vistaprint, Waltham" ref="office" required/>
                    <Input type="file" name="techPage" label="Tech page PDF" help="ADD DIMENSION AND RESOLUTION SPECS HERE" ref="file" required/>
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