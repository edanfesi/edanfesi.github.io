import React from "react"

import "./styles/hero.css"

import ProfileContact from "./profile_contact"

function Hero() {
  return (
    <main className="section">
      <div className="hero-wrapper">
        <span className="hero__icon" role="img" arial-label="Waving Hand">
          👋
        </span>

        <h1 className="hero__title">
          Hi there *waves*, <br /> my name is Edward
        </h1>

        <p className="hero__description">
          Currently developing, integrating and testing end-to-end solution
          implementation services at <a href="#">EY Panama</a> to help companies
          thrive in the transformative age.
        </p>

        <button className="btn hero__btn">Get Started</button>

        <ProfileContact />
      </div>
      <hr />
    </main>
  )
}

export default Hero
