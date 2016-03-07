import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {Recipe, RecipeToolBar, Loading} from '../../components'
import { fetchRetrieveIfNeeded, update } from '../../actions'
import ContentEditable from 'react-contenteditable'
import styles from './styles.css'

const RecipeEditor = React.createClass({
  componentDidMount: function() {
  	const {id} = this.props.params;
  	if(id){
	  	const {fetchRetrieveIfNeeded} = this.props;
	  	fetchRetrieveIfNeeded(id, true);
  	}
  },

  update: function(evt) {
    const {update} = this.props;
    update(evt.currentTarget.id, evt.target.value)
  },
        // <Recipe />
  render: function() {
    const {recipe} = this.props;
    const disabled = false;

    return (
      <div className={styles.recipe}>
        <div className={styles.content}>
          
        </div>
        <div className={styles.profile}>
          <div className={styles.profilePicture}> </div>
          <ContentEditable id="fullName" className={styles.profileName} html={recipe.fullName} disabled={disabled} onChange={this.update} />
          <ContentEditable id="company"  className={styles.profileCompany} html={recipe.company} disabled={disabled} onChange={this.update} />
          <ContentEditable id="companyLocation"  className={styles.profileCompanyLocation} html={recipe.companyLocation} disabled={disabled} onChange={this.update} />
          <ContentEditable  id="profileSummary" className={styles.profileSummary} html={recipe.profileSummary} disabled={disabled} onChange={this.update} />
        </div>
      </div>
    )
  }
})


RecipeEditor.propTypes = {
  fetchRetrieveIfNeeded: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.present
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRetrieveIfNeeded, update }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RecipeEditor)