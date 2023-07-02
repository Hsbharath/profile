import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PropTypes from "prop-types"

const IndexPage = ({ location }) => <Layout location={location}></Layout>

export const Head = () => (
  <>
    <body id="gatsby" />
    <Seo title="Bharath Hunkunda Sreenivasa" />
  </>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
