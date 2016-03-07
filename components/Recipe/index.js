import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { update } from '../../actions'
import ContentEditable from 'react-contenteditable'
import styles from './styles.css'

const Recipe = React.createClass({
  update: function(evt) {
    const {update} = this.props;
    update(evt.currentTarget.id, evt.target.value)
  },

  render: function() {
    const {recipe} = this.props;
    const disabled = false;

    return (
      <div className={styles.recipe}>
        <div className={styles.content}>
          <img className={styles.foodPicture} />
          <ContentEditable id="title" className={styles.title} html={recipe.title} disabled={disabled} onChange={this.update} />
          <ContentEditable id="caption"  className={styles.caption} html={recipe.caption} disabled={disabled} onChange={this.update} />
          <div className={styles.instructions}> 
            <div className={styles.ingredients}>
              <ContentEditable id="ingredients" className={styles.ingredientsList} html={recipe.ingredients} disabled={disabled} onChange={this.update} />
            </div>
            <div className={styles.directions}>
              <ContentEditable id="directions" className={styles.directionsList} html={recipe.directions} disabled={disabled} onChange={this.update} />
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <img className={styles.profilePicture} />
          <ContentEditable id="fullName" className={styles.profileName} html={recipe.fullName} disabled={disabled} onChange={this.update} />
          <ContentEditable id="company"  className={styles.profileCompany} html={recipe.company} disabled={disabled} onChange={this.update} />
          <ContentEditable id="companyLocation"  className={styles.profileCompanyLocation} html={recipe.companyLocation} disabled={disabled} onChange={this.update} />
          <ContentEditable  id="profileSummary" className={styles.profileSummary} html={recipe.profileSummary} disabled={disabled} onChange={this.update} />
        </div>
      </div>
    )
  }
})


Recipe.propTypes = {
  update: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.present
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ update }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe)