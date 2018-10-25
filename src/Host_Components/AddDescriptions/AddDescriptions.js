import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getHostDescribeMain, getHostDescribeSpace, getHostDescribeGuestAccess, getHostDescribeInteraction,  getHostDescribeOther} from '../../redux/reducer';

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

  render() {
    const {hostDescribeMain, hostDescribeSpace, hostDescribeGuestAccess, hostDescribeInteraction, hostDescribeOther} = this.props;
    return (
      <div>
        <h1>Edit your description</h1>
        <h3>Summary</h3>
        <textarea value={hostDescribeMain} onChange={(e) => this.handleDescribeMain(e.target.value)} placeholder="Describe the decor, light, what's nearby, etc..."/>
        <h3>About your place (optional)</h3>
        <textarea value={hostDescribeSpace} onChange={(e) => this.handleDescribeSpace(e.target.value)} />
        <h3>What guests can access (optional)</h3>
        <textarea value={hostDescribeGuestAccess} onChange={(e) => this.handleDescribeGuestAccess(e.target.value)} />
        <h3>Your interaction with guests (optional)</h3>
        <textarea value={hostDescribeInteraction} onChange={(e) => this.handleDescribeInteraction(e.target.value)} />
        <h3>Other things to note (optional)</h3>
        <textarea value={hostDescribeOther} onChange={(e) => this.handleDescribeOther(e.target.value)} />

        <div className="lightbulb-blurb">
          <h3>Your summary description is meant to be a brief overview of your place that guests read before they get into the details.</h3>
        </div>


        <Link to="/name-price">
          <button>Next</button>
        </Link>
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
