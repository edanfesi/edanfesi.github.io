import React from "react"

import "./styles/sub_section_header.css"

const SectionHeader = props => {
  return (
    <div>
      <h4 className="sub_section_header__sub-title">{props.sub_title}</h4>
      <h3 className="sub_section_header__title">{props.title}</h3>
    </div>
  )
}

export default SectionHeader
