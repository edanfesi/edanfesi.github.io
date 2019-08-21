import React from "react"

import "./styles/hero.css"

import ProfileContact from "./profile_contact"

function Hero() {
  return (
    <section className="section animated">
      <div className="hero-wrapper">
        <span className="hero__icon wave" role="img" aria-label="Waving Hand">
          👋
        </span>

        <h1 className="hero__title">
          Hi there *waves*, <br /> my name is Edward
        </h1>

        <p className="hero__description">
          I'm a Software Developer that currently developing, integrating and
          testing end-to-end solutions implementation services at{" "}
          <a href="https://www.ey.com/ac/en/home">EY Panama</a> to help
          companies thrive in the transformative age.
        </p>

        <button className="btn hero__btn">Get Started</button>

        <ProfileContact />
      </div>
    </section>
  )
}

export default Hero
