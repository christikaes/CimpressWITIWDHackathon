import React from 'react'
import { connect } from 'react-redux'
import styles from './styles.css'
import {Glyphicon} from 'react-bootstrap'

const Loading = React.createClass({

  render: function(){
    let LoadingBox = React.createClass({
        render: function() {
            return (
                <div className={styles.container}>
                    <h2> Loading </h2>
                </div>
            );
        }
    });
    const {loading} = this.props;
    return(
      <div>
        {loading ? <LoadingBox /> : null}
      </div>) 
  }
});

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

export default connect(
  mapStateToProps
)(Loading)
