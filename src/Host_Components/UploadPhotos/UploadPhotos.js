import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addHostImgs } from '../../redux/reducer';
import { connect } from 'react-redux';
import './UploadPhotos.css';

export class UploadPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'dclawygaw', upload_preset: 'xaeobcax', folder: 'airbb', tags: ['xmas'] },
      (error, result) => {
        console.log(result.info.secure_url)
        if (result.info.secure_url) {
          // Update gallery state with newly uploaded image
          let myGallery = [...this.state.gallery].concat(result.info.secure_url)
          console.log(myGallery);

          this.setState({ gallery: myGallery })
          this.props.addHostImgs(this.state.gallery)

        }
      });


  }

  render() {
    return (
      <div className="upload-photos-container">
        <h5 className="upload-photos-title">Show guests what your space looks like</h5>
        <h3 className="host-step-number-text">STEP 3</h3>
        <div className="dotted-box">
          <div className="main">
            <div className="upload">
              <button onClick={this.uploadWidget} className="upload-button">
                Upload Photos
              </button>
            </div>
          </div>
        </div>

        <div className="back-and-next-btns">
          <button className="host-goback-link" onClick={() => this.handleGoBack()}>Back</button>
        
        <Link to="/description">
          <button className="host-continue-btn">Continue</button>
        </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { hostImgs } = state;

  return {
    hostImgs
  }
}


export default connect(mapStateToProps, { addHostImgs })(UploadPhotos);
