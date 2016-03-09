import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { Glyphicon } from 'react-bootstrap'
import { update, updateEditing } from '../../actions'
import ContentEditable from 'react-contenteditable'
import Dropzone from 'react-dropzone'
import styles from './styles.css'
import fetch from 'isomorphic-fetch'

const Recipe = React.createClass({
  // TODO: Move this to a different state
  showEditImage: function(evt) {
    const {updateEditing} = this.props;
    updateEditing(evt.currentTarget.id, true)
  },

  hideEditImage: function(evt) {
    const {updateEditing} = this.props;
    updateEditing(evt.currentTarget.id, false)
  },

  update: function(evt) {
    const {update} = this.props;
    update(evt.currentTarget.id, evt.target.value)
  },

  onDropFood: function(files) {
    let placeholderType = "foodPicture";
    let placeholderDimensions= {
      width: 750,
      height: 250
    }
    this.onDrop(files, placeholderType, placeholderDimensions)
  },

  onDropProfile: function(files) {
    let placeholderType = "profilePicture";
    let placeholderDimensions= {
      width: 250,
      height: 250
    }
    this.onDrop(files, placeholderType, placeholderDimensions)
  },

  onDrop: function(files, placeholderType, placeholderDimensions) {
    const {update, recipe} = this.props;
    let form = new FormData();
    form.append("photo", files[0]);

    fetch('/recipe-photo-upload', {
      method: 'post',
      body: form,
    }).then(req => req.json())
    .then(json => {
        let picture = {
          "src": json.photoName,
          "style": {
            "height" : json.dimensions.height,
            "width" : json.dimensions.width,
            "top": -json.dimensions.height/2 + placeholderDimensions.height/2,
            "left": -json.dimensions.width/2 + placeholderDimensions.width/2
          }
        } 
        update(placeholderType, picture);
    })
  },

  render: function() {
    const imagePath = window.location.origin + "/uploads/recipe/photos/"
    const {recipe, editing} = this.props;
    const disabled = false;
    const editDisabled = true;
    let EditImage = React.createClass({
        render: function() {
            return (
                <div className={styles.editImage}>
                    <Glyphicon glyph="camera" className={styles.camera}/>
                    <Glyphicon glyph="plus-sign" className={styles.zoomIn} onClick=""/>
                    <Glyphicon glyph="minus-sign" className={styles.zoomOut}/>
                </div>
            );
        }
    });

    return (
      <div className={styles.recipe}>
        <div className={styles.content}>
          <Dropzone multiple={false} accept={"image/*"} onDrop={this.onDropFood}  id="foodPictureContainer" className={styles.imageContainer + " " + styles.editable} onMouseEnter={this.showEditImage}  onMouseLeave={this.hideEditImage}>
              <img id="foodPicture" className={styles.foodPicture} src={imagePath + recipe.foodPicture.src} style={recipe.foodPicture.style} />
              {(!editDisabled && editing.foodPictureContainer) ? <EditImage /> : null}
          </Dropzone>
          <div className={styles.recipeContent}>
            <h1><ContentEditable id="title" className={styles.title} html={recipe.title} disabled={disabled} onChange={this.update} /></h1>
            <h2><ContentEditable id="caption"  className={styles.caption} html={recipe.caption} disabled={disabled} onChange={this.update} /></h2>
            <div className={styles.instructions}> 
              <div className={styles.ingredients}>
                <h3> Ingredients </h3>
                <ContentEditable id="ingredients" className={styles.ingredientsList} html={recipe.ingredients} disabled={disabled} onChange={this.update} />
              </div>
              <div className={styles.directions}>
                <h3> Directions </h3>
                <ContentEditable id="directions" className={styles.directionsList} html={recipe.directions} disabled={disabled} onChange={this.update} />
              </div>
            </div>
          </div>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.cell}>
                  <Glyphicon glyph="hourglass" className={styles.glyph}/>
                  <div>
                    <ContentEditable id="prepTime" html={recipe.prepTime} disabled={false} onChange={this.update} />
                    <div>to Prep</div>
                  </div>
                </td>
                <td className={styles.cell}>
                  <Glyphicon glyph="hourglass" className={styles.glyph}/>
                  <ContentEditable id="cookTime" html={recipe.cookTime} disabled={false} onChange={this.update} />
                  <div>to Prep</div>
                </td>
                <td className={styles.cell}>
                  <Glyphicon glyph="cutlery" className={styles.glyph}/>
                  <ContentEditable id="servings" html={recipe.servings} disabled={false} onChange={this.update} />
                  <div>servings</div>
                </td>
                <td className={styles.cell}>
                  <Glyphicon glyph="fire" className={styles.glyph}/>
                  <ContentEditable id="calories" html={recipe.calories} disabled={false} onChange={this.update} />
                  <div>calories</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.profile}>
          <Dropzone multiple={false} accept={"image/*"} onDrop={this.onDropProfile}  id="profilePictureContainer" className={styles.imageContainer + " " + styles.editable} onMouseEnter={this.showEditImage}  onMouseLeave={this.hideEditImage}>
            <img id="profilePicture" className={styles.profilePicture} src={imagePath + recipe.profilePicture.src} style={recipe.profilePicture.style}  />
            {(!editDisabled && editing.foodPictureContainer) ? <EditImage /> : null}
          </Dropzone>
          <h3><ContentEditable id="fullName" className={styles.profileName} html={recipe.fullName} disabled={disabled} onChange={this.update} /></h3>
          <h3><ContentEditable id="company"  className={styles.profileCompany} html={recipe.company} disabled={disabled} onChange={this.update} /></h3>
          <ContentEditable id="companyLocation"  className={styles.profileCompanyLocation} html={recipe.companyLocation} disabled={disabled} onChange={this.update} />
          <em><ContentEditable  id="profileSummary" className={styles.profileSummary} html={recipe.profileSummary} disabled={disabled} onChange={this.update} /></em>
        </div>
      </div>
    )
  }
})


Recipe.propTypes = {
  update: PropTypes.func.isRequired,
  updateEditing: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.present,
    editing: state.editing
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ update, updateEditing }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe)