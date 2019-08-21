import React from "react"

import "./styles/sub_section_header.css"

const SectionHeader = props => {
  return (
    <div className="sub-section-header">
      <h5 className="sub-section-header__sub-title">{props.sub_title}</h5>
      <h3 className="sub-section-header__title">{props.title}</h3>
    </div>
  )
}

export default SectionHeader
