import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import DevelopingProcess from "../components/developing_process"
import GetInTouch from "../components/get_in_touch"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <hr />
    <DevelopingProcess />
    <GetInTouch />
  </Layout>
)

export default IndexPage
