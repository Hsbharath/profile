import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const projects = () => (
  <Layout>
    <h1 className="title lg:text-6xl text-4xl text-cyan-400 antialised line-clamp-1 font-black pb-6 ml-auto">
      Projects
    </h1>
  </Layout>
)

export const Head = () => <Seo title="Projects" />

export default projects
