import React from "react"

import "./styles/process_step.css"

function ProcessStep(props) {
  return (
    <div className="process-step">
      <div className="process-step__number">{props.process_step.number}</div>
      <h3 className="process-step__title">{props.process_step.title}</h3>
      <p className="process-step__description">
        <span>{props.process_step.sub_title}</span>
        {props.process_step.description}
      </p>
    </div>
  )
}

export default ProcessStep
