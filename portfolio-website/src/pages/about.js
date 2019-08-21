import React from "react"

import "./styles/about.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionHeader from "../components/section_header"
import SubSectionHeader from "../components/sub_section_header"
import ItemList from "../components/item-list"
import AboutPhoto from "../images/about-photo.jpg"
import Timeline from "../components/timeline"

const toolset = [
  {
    title: "Programming Languages",
    list: ["JavaScript", "Python", "C#"],
  },
  {
    title: "Frameworks & Libraries",
    list: ["ReactJS", "GatsbyJS", "Django", ".NET"],
  },
  {
    title: "Databases",
    list: ["PostgreSQL", "MySQL", "Microsoft SQL Server"],
  },
  {
    title: "Web Development",
    list: ["HTML5", "CSS3", "Sass"],
  },
  {
    title: "Designing Tools",
    list: ["Sketch", "Adobe XD", "Photoshop"],
  },
  {
    title: "Version Control",
    list: ["Git & Github"],
  },
]
const entries = [
  {
    company: "EY",
    time: "Jun 2018 - Present . 1yr 2mos+",
    job_title: "Consultant | Technology Solution Delivery",
    job_location: "Panama, Panama",
  },
  {
    company: "Analiticom",
    time: "Abr 2017 - Jul 2018 . 1yr 4mos",
    job_title: "Senior Software Architect",
    job_time: "Feb 2018 - Jul 2018 . 6mos",
    job_location: "Caracas, Venezuela",
  },
  {
    company: "",
    time: "",
    job_title: "Web Developer",
    job_time: "Sept 2017 - Feb 2018 . 6mos",
    job_location: "Caracas, Venezuela",
  },
]

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <section className="about-wrapper section">
      <SectionHeader
        title="Hi there, I’m Edward Fernández"
        sub_title="Nice to meet you"
      />

      <figure className="portrait">
        <img alt="Edward's Portrait" src={AboutPhoto} />
      </figure>

      <p className="about-description">
        I’m a Computer Engineer graduated from the Universidad Simón Bolivar at
        Caracas Venezuela.
      </p>
      <p className="about-description">
        I work as a Software Developer creating and developing experiences that
        help users and companies on a daily basis. I have been living in Panama
        since 2018.
      </p>
      <p className="about-description">
        I’m currently available for new projects, so{" "}
        <a
          className="link"
          href="mailto:edanfesi@gmail.com?subject=I%20want%20to%20build%20an%20amazing%20project"
        >
          send me a message
        </a>
        and let’s discuss how can I help you.
      </p>
      <p className="about-description">
        You can also follow me on{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/edanfesi/"
        >
          LinkedIn
        </a>{" "}
        (and see mi full CV),{"\u00A0"}
        <a
          className="link"
          href="https://github.com/edanfesi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        or reach out via email -{" "}
        <a
          className="link"
          href="mailto:edanfesi@gmail.com?subject=Hello%20Edward"
        >
          edanfesi@gmail.com.
        </a>
      </p>

      <div className="about-section">
        <SubSectionHeader sub_title="Ready to work" title="Toolset" />
        <ul className="toolset-wrapper">
          {toolset.map((item, index) => (
            <ItemList {...item} key={index} />
          ))}
        </ul>
      </div>

      <div className="about-section">
        <SubSectionHeader
          sub_title="What I've been doing"
          title="Work Experience"
        />

        <Timeline entries={entries} />
      </div>
    </section>
  </Layout>
)

export default AboutPage
