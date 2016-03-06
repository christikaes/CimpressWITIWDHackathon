import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Input, ButtonInput} from 'react-bootstrap';

const Tech = React.createClass({
    render: function() {
        return (
            <Grid>
                <h1>Submit a Tech Page</h1>  
                <form onSubmit={this.submit} ref="form">
                    <Input type="text" label="First Name" placeholder="Janet" ref="firstName" />
                    <Input type="text" label="Last Name" placeholder="Doe" ref="lastName" />
                    <Input type="email" label="Email Address" placeholder="jdoe@cimpress.com" ref="email" />
                    <Input type="text" label="Business Unit and Office Location" placeholder="Vistaprint, Waltham" ref="office"/>
                    <Input type="file" label="Tech page PDF" help="ADD DIMENSION AND RESOLUTION SPECS HERE" ref="file"/>
                    <ButtonInput type="submit" value="Submit Tech Page" bsStyle="primary"/>
                </form>
            </Grid>

        )
    },
    submit: function(e) {
        e.preventDefault();

        // var form = ReactDOM.findDOMNode(this.refs.form);
        // var formData = new FormData(form);
        // console.log(formData.get("firstName"));

        var data = {
            "firstName": this.refs.firstName.getValue(),
            "lastName": this.refs.lastName.getValue(),
            "email": this.refs.email.getValue(),
            "office": this.refs.office.getValue()
        };

        var xmlhttp = new XMLHttpRequest();
        // var _this = this;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
                console.log(xmlhttp.responseText);
                // var response = JSON.parse(xmlhttp.responseText);
                // if (xmlhttp.status === 200 && response.status === 'OK') {
                //     console.log("tech page submitted successfully");
                // }
                // else {
                //     console.log("error submitting tech page");    
                // }
            }
        };
        xmlhttp.open('POST', window.location.origin + "/tech-form", true);
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.send(JSON.stringify(data));
    }
});

export default Tech;

// TODO:
//      File upload
//      Validation
//      Success/error messages