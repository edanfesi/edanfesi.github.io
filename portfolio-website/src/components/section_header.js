import React from "react"

import "./styles/section_header.css"

const SectionHeader = props => {
  return (
    <div>
      <h4 className="section_header__sub-title">{props.sub_title}</h4>
      <h2 className="section_header__title">{props.title}</h2>
    </div>
  )
}

export default SectionHeader
