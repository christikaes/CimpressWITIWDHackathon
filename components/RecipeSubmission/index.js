import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
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
                <Message 
                    visibilityClass={this.state.showStatusMessage ? "show" : "hidden"}
                    statusMessage={this.state.statusMessage}
                    statusType={this.state.statusType}
                    onDismiss={this.handleAlertDismiss}
                />
                <form onSubmit={this.submit} ref="form">
                    <Input type="email" name="email" label="Office Email Address" placeholder="jdoe@cimpress.com" ref="email" required/>
                    <ButtonInput type="submit" value="Submit Recipe" bsStyle="primary"/>
                </form>
            </Grid>
        )
    },
    submit: function(e) {
        const {recipe} = this.props;
        e.preventDefault();

        let data = {};
        data.recipe = recipe
        data.email = this.refs.email.getValue();

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
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(data));
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

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.present
  }
}

export default connect(
    mapStateToProps
)(RecipeSubmission)