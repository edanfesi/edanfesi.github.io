import React from "react"

import "./styles/get_in_touch.css"

import SubSectionHeader from "./sub_section_header"
import ProfileContact from "./profile_contact"

function GetInTouch() {
  return (
    <section className="get-in-touch section">
      <div className="get-in-touch-wrapper">
        <SubSectionHeader
          sub_title="Get in touch"
          title="Let’s work together on your next project."
        />

        <p className="get-in-touch__description">
          if you have an idea that involves developing a web site, a mobile app
          or you need help to fix something with your digital product, feel free
          to contact me.
        </p>

        <button className="btn hero__btn">edanfesi@gmail.com</button>

        <div className="get-in-touch__profile-contact">
          <ProfileContact />
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
