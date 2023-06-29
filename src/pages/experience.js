import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const experience = () => {
  return (
    <Layout>
      <h1 className="title lg:text-6xl text-4xl text-cyan-400 antialised line-clamp-1 font-black pb-6 ml-auto">
        Experience
      </h1>
    </Layout>
  )
}

export const Head = () => <Seo title="Experience" />

export default experience
