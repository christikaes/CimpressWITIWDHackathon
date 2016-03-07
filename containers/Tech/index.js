import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Input, ButtonInput} from 'react-bootstrap';

const Tech = React.createClass({
    render: function() {
        return (
            <Grid>
                <h1>Submit a Tech Page</h1>
                <p className="lead">Some intro text should go here, with an explanation of what this is and links to the rules and stuff.</p>
                <form onSubmit={this.submit} ref="form">
                    <Input type="text" name="firstName" label="First Name" placeholder="Jane" ref="firstName" />
                    <Input type="text" name="lastName" label="Last Name" placeholder="Doe" ref="lastName" />
                    <Input type="email" name="email" label="Email Address" placeholder="jdoe@cimpress.com" ref="email" />
                    <Input type="text" name="office" label="Business Unit and Office Location" placeholder="Vistaprint, Waltham" ref="office"/>
                    <Input type="file" name="techPage" label="Tech page PDF" help="ADD DIMENSION AND RESOLUTION SPECS HERE" ref="file"/>
                    <ButtonInput type="submit" value="Submit Tech Page" bsStyle="primary"/>
                </form>
            </Grid>

        )
    },
    submit: function(e) {
        e.preventDefault();

        var form = ReactDOM.findDOMNode(this.refs.form);
        var formData = new FormData(form);

        // TODO: Remove individual input refs if FormData keeps working
        // var data = {
        //     "firstName": this.refs.firstName.getValue(),
        //     "lastName": this.refs.lastName.getValue(),
        //     "email": this.refs.email.getValue(),
        //     "office": this.refs.office.getValue()
        // };

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
        // xmlhttp.setRequestHeader('Content-type', 'application/json');
        // xmlhttp.send(JSON.stringify(data));
        xmlhttp.send(formData);
    }
});

export default Tech;

// TODO:
//      File upload
//      Validation
//      Success/error messages
//      Set rules (with multer) for file types and size limits