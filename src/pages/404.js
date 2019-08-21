import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

import "./styles/404.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section flex-column lost-page-wrapper">
      <span
        className="lost-page-main-emoji"
        role="image"
        aria-label="Lookin..."
      >
        👀
      </span>
      <h1 className="lost-page-title">That's odd...</h1>
      <p className="lost-page-message">
        The page you're looking for doesn't seem to be here... (the sadness),
        but maybe it might not have been here in the first place, who knows ,
        not me?
      </p>
      <p className="lost-page-message">
        Anyway, I'd like to apologies for this error, I hope you have a good
        day.
      </p>

      <div className="go-home-link-container">
        <Link to="/" className="link">
          Go back {"\u00A0"}
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
