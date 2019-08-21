import { Link } from "gatsby"
import React, { Component } from "react"

import "./styles/header.css"
// import MenuIcon from "../images/menu.svg"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/">
              Edward<span>F</span>.
            </Link>
          </div>

          <nav className="nav">
            <ul>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>

          <a
            id="contact-me-btn"
            className="btn"
            href="mailto:edanfesi@gmail.com?subject=Hello%20Edward"
          >
            Contact me
          </a>
          <div id="menu-icon" className="play"></div>
        </div>
      </header>
    )
  }
}

export default Header
