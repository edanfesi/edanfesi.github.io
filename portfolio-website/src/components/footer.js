import React from "react"

import "./styles/footer.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-wrapper">
        <a
          className="social-media-link social-media-link--linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/edanfesi/"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="social-media-link social-media-link--github"
          target="_blank"
          href="https://github.com/edanfesi"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <p>
        Copyright 2019 All rights reserved — Designed & Coded by Edward
        Fernandez
      </p>
    </footer>
  )
}

export default Footer
