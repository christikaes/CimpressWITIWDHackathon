import React from 'react';
import {Grid, Input, ButtonInput} from 'react-bootstrap';

const Tech = React.createClass({
    render: function() {
        return (
            <Grid>
                <h1>Submit a Tech Page</h1>  
                <form>
                    <Input type="text" label="First Name" placeholder="Jane" />
                    <Input type="text" label="Last Name" placeholder="Doe" />
                    <Input type="email" label="Email Address" placeholder="jdoe@cimpress.com" />
                    <Input type="text" label="Business Unit and Office Location" placeholder="Vistaprint, Waltham" />
                    <Input type="file" label="Tech page PDF" help="ADD DIMENSION AND RESOLUTION SPECS HERE" />
                    <ButtonInput value="Submit Tech Page" bsStyle="primary" onClick={this.submit}/>
                </form>
            </Grid>

        )
    },
    submit: function(e) {
        e.preventDefault();
        console.log("Submitting tech page");
    }
});

export default Tech;