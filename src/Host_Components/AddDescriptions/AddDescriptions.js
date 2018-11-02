import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getHostDescribeMain, getHostDescribeSpace, getHostDescribeGuestAccess, getHostDescribeInteraction,  getHostDescribeOther} from '../../redux/reducer';
import './AddDescription.css';

export class AddDescriptions extends Component {
  
  handleDescribeMain = (event) => {
    this.props.getHostDescribeMain(event)
    console.log(event)
  }

  handleDescribeSpace = (event) => {
    this.props.getHostDescribeSpace(event)
    console.log(event)
  }

  handleDescribeGuestAccess = (event) => {
    this.props.getHostDescribeGuestAccess(event)
    console.log(event)
  }

  handleDescribeInteraction = (event) => {
    this.props.getHostDescribeInteraction(event)
    console.log(event)
  }

  handleDescribeOther = (event) => {
    this.props.getHostDescribeOther(event)
    console.log(event)
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  render() {
    const {hostDescribeMain, hostDescribeSpace, hostDescribeGuestAccess, hostDescribeInteraction, hostDescribeOther} = this.props;
    return (
      <div className="add-descriptions-container">
        <div className="add-descriptions-left-side-container">
        <h1>Edit your description</h1>
        <h3 className="host-step-number-text">STEP 4</h3>
        <h3 className="add-descriptions-box-titles">Summary</h3>
        <textarea className="input-box" value={hostDescribeMain} onChange={(e) => this.handleDescribeMain(e.target.value)} placeholder="Describe the decor, light, what's nearby, etc..."/>
        <h3 className="add-descriptions-box-titles">About your place (optional)</h3>
        <textarea className="input-box" value={hostDescribeSpace} onChange={(e) => this.handleDescribeSpace(e.target.value)} />
        <h3 className="add-descriptions-box-titles">What guests can access (optional)</h3>
        <textarea className="input-box" value={hostDescribeGuestAccess} onChange={(e) => this.handleDescribeGuestAccess(e.target.value)} />
        <h3 className="add-descriptions-box-titles">Your interaction with guests (optional)</h3>
        <textarea className="input-box" value={hostDescribeInteraction} onChange={(e) => this.handleDescribeInteraction(e.target.value)} />
        <h3 className="add-descriptions-box-titles">Other things to note (optional)</h3>
        <textarea className="input-box" value={hostDescribeOther} onChange={(e) => this.handleDescribeOther(e.target.value)} />

        {/* <div className="lightbulb-blurb">
          <h3>Your summary description is meant to be a brief overview of your place that guests read before they get into the details.</h3>
        </div> */}
        
        <div className="back-and-next-btns">
            <button className="host-goback-link" onClick={() => this.handleGoBack()}>Back</button>
          <Link to="/name-price">
            <button className= "host-continue-btn">Next</button>
          </Link>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  const {hostDescribeMain, hostDescribeSpace, hostDescribeGuestAccess, hostDescribeInteraction, hostDescribeOther} = state;
  return {
    hostDescribeMain, 
    hostDescribeSpace, 
    hostDescribeGuestAccess, 
    hostDescribeInteraction, 
    hostDescribeOther
  }
}

export default connect(mapStateToProps, {getHostDescribeMain, getHostDescribeSpace, getHostDescribeGuestAccess, getHostDescribeInteraction,  getHostDescribeOther}) (AddDescriptions)
