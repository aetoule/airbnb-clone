import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { addHostImgs } from '../../redux/reducer'
import { connect } from 'react-redux'


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

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'dclawygaw', upload_preset: 'xaeobcax', folder: 'airbb', tags: ['xmas'] },
      (error, result) => {
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
      <div>
        <h1>Set the Scene</h1>
        <h2>Show guests what it looks like</h2>
        <div className="main">
          <div className="upload">
            <button onClick={this.uploadWidget} className="upload-button">
              Add Images
                    </button>
          </div>

        </div>
        <Link to="/description">
          <button>Next</button>
        </Link>
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
