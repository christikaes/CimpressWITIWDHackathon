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
                    Loading
                </div>
            );
        }
    });
    const {recipe} = this.props;
    return(
      <div>
        {recipe.Loading ? <LoadingBox /> : null}
      </div>) 
  }
});

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.present
  }
}

export default connect(
  mapStateToProps
)(Loading)
