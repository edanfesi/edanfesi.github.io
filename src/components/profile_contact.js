import React from "react"

import "./styles/profile_contact.css"
import photo from "../images/photo.png"

function ProfileContact() {
  return (
    <div className="profile-availability">
      <div className="profile-img">
        <div className="img-container">
          <img src={photo} alt="Edward Fernandez - Software Developer" />
        </div>
        <div className="estimate-indicator"></div>
      </div>
      <span className="profile-availability__description">
        <span>Reply time:</span> within 1-2 days
      </span>
    </div>
  )
}

export default ProfileContact
