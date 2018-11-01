import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getCity } from '../../redux/reducer';
import { connect } from 'react-redux';
import AirbnbLogo from '../../media/AirbnbLogo.svg';
import downarrow from '../../media/arrowdownblack.svg'
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggle: false
        }
    }
    handleChange(event) {
        this.props.getCity(event.target.value)
      }
    
    render() { 
        return ( 
            <header>
                <div className='header-body'>
                    <div className="logo-and-search-container">
                    <Link to="/"><button className="airbnb-logo-big-only" ></button></Link>
                            
                        <div className="logo-and-arrow-container" >
                            <button className="logo-and-arrow" onClick={()=>this.setState({ toggle: !this.state.toggle })}>
                                <img className="airbnb-logo" src={AirbnbLogo} alt="airbnb logo"/>
                                <img className="down-arrow"  src={downarrow} alt="down arrow"/>
                            </button>
                        </div>
                        <div className='search-box'>
                            <div className="search-icon"></div>
                            {/* <p className="search-text">Search</p> */}
                            <select value={this.props.city} ref='city' onChange={(e) => this.handleChange(e)} placeholder="select a city">
                                <option value="">Search</option>
                                <option value="Phoenix">Phoenix</option>
                                <option value="Flagstaff">Flagstaff</option>
                                <option value="Sedona">Sedona</option>
                                <option value="Tucson">Tucson</option>
                                <option value="Williams">Williams</option>
                            </select>
                        </div>
                    </div>
                    <nav className={this.state.toggle ? 'show' : ''}>
                        <div className="small-space"></div>
                        <ul>
                            <li className="nav-links-small-only" onClick={()=>this.setState({ toggle: !this.state.toggle })}><Link to="/">Home</Link></li>
                            <hr className="dropdown-line"></hr>
                            <li className="nav-links" onClick={()=>this.setState({ toggle: !this.state.toggle })}><Link to="/become-a-host">Become a Host</Link></li>
                            <li className="nav-links" onClick={()=>this.setState({ toggle: !this.state.toggle })}><Link to="/about-us">About The Developers</Link></li>
                            <hr className="dropdown-line"></hr>
                            <li className="nav-links" onClick={()=>this.setState({ toggle: !this.state.toggle })}>Login</li>
                            <div className="big-space"></div>
                            <p className="hidden-text-to-make-whitespace">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
                        </ul>
                    </nav>
                    <div className="horizontal-nav-container">
                        <ul className="large-horizontal-nav">
                            <li className="nav-links-horizontal"><Link to="/become-a-host">Become a Host</Link></li>
                            <li className="nav-links-horizontal"><Link to="/about-us">About The Developers</Link></li>
                            <li className="nav-links-horizontal">Login</li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    const { city } = state;
    return {
      city
    }
  }
  
  export default connect(mapStateToProps, { getCity })(Header);
  