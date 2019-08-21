import React from "react"

import "./styles/timeline_entry.css"

const TimelineEntry = props => {
  return (
    <li className="entry">
      <div className="entry__title">
        <h3>{props.company}</h3>
        <p>{props.time}</p>
      </div>
      <div className="entry__body">
        <h4>{props.job_title}</h4>
        <p>{props.job_time}</p>
        <p>{props.job_location}</p>
      </div>
    </li>
  )
}

export default TimelineEntry
