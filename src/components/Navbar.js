import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import { FaAlignRight} from 'react-icons/fa'

export default class Navbar extends Component {
state = {
    isOpen: false
}
handleToggle = () => {
    this.setState({ isOpen: !this.isOpen})
}
render() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/" className="navlink">
                        <img src={logo} alt="Beach Resort" />
                    </Link>
                    <Link to="/" className="navlink navlinkpages">Home</Link>
                    <Link to="/rooms" className="navlink navlinkpages">Rooms</Link>
                </div>
                
                <ul className={this.state.isOpen ?  "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/roooms">Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
}
