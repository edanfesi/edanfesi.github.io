import React from "react"

import "./styles/section_header.css"

const SectionHeader = props => {
  return (
    <div className="section-header" key={props.id}>
      <h5 className="section-header__sub-title">{props.sub_title}</h5>
      <h2 className="section-header__title">{props.title}</h2>
    </div>
  )
}

export default SectionHeader
