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

  // componentDidMount() {
  //   // Request for images tagged xmas       
  //   axios.get(`https://${process.env.REACT_APP_CLOUDINARY_API_KEY}:${process.env.REACT_APP_CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/dclawygaw/resources/image`)
  //     .then(res => {
  //       console.log(res.data.resources);
  //       // this.setState({ gallery: res.data.resources });
  //     }).catch(error => {
  //       console.log(error);

  //     })
  // }
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

    console.log(this.props.hostImgs);

  }

  render() {
    console.log(this.props.hostImgs);


    return (
      <div className="upload-photos-container">
        {/* <h1>Set the Scene</h1> */}
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
  // const {total, city } = state;

  return {
    hostImgs
  }
}


export default connect(mapStateToProps, { addHostImgs })(UploadPhotos);
