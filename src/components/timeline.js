import React from "react"

import "./styles/timeline.css"
import TimelineEntry from "./timeline_entry"

const Timeline = props => {
  return (
    <ul className="timeline">
      {props.entries.map((entry, index) => {
        return <TimelineEntry {...entry} key={index} />
      })}
    </ul>
  )
}

export default Timeline
