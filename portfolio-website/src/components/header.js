import { Link } from "gatsby"
import React, { Component } from "react"

import "./styles/header.css"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <div className="logo">
            Edward<span>F</span>.
          </div>

          <nav className="nav">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="#">Projects</Link>
              </li>
            </ul>
          </nav>

          <a className="btn" href="#">
            Contact me
          </a>
        </div>
      </header>
    )
  }
}

export default Header
