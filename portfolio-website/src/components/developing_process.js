import React from "react"

import "./styles/developing_process.css"

import SectionHeader from "./section_header"
import ProcessStep from "./process_step"

function DevelopingProcess() {
  const process_steps = [
    {
      number: "01",
      title: "Strategy",
      sub_title: "Ask first.",
      description:
        "Before jumping into the development of any solution I always make sure that we're asking the right questions and knowing which challenges we want to accomplish. This stage includes consulting, exploring the possible solutions and defining the objectives to be accomplished.",
    },
    {
      number: "02",
      title: "Design",
      sub_title: "Problem Solving.",
      description:
        "At the end of this phase, we'll have defined the framework to be used, how everything will be implemented and if you need I can make the wireframes, the prototype, and the final design.",
    },
    {
      number: "03",
      title: "Development",
      sub_title: "Bringing your project to life.",
      description:
        "Since I'm a programmer who can design, I can easily work in close collaboration with your designers and developers up until the finish line and beyond. I can do Full-stack development.",
    },
    {
      number: "04",
      title: "Quality assurance",
      sub_title: "Transparent Process.",
      description:
        "During the development of your project you will have a complete overview of the code, the tests and every action taken. After the project finished I'll be with you verifying until we decide, that everything works smoothly.",
    },
  ]

  return (
    <section className="section animated">
      <div className="content-wrapper">
        <SectionHeader sub_title="How I work" title="Developing Process" />

        <div className="process-steps-wrapper">
          {process_steps.map((process_step, index) => (
            <ProcessStep process_step={process_step} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevelopingProcess
