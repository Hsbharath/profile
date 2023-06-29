/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import "./layout.css"
import Header from "./header"
import Profile from "./profile"

const Layout = ({ children }) => {

  return (
    <div className="relative">
      <div className="sticky top-0 left-0 right-0 mx-auto header-section z-50">
          <Header/>
        </div>
      <div className="max-w-screen-xl h-screen-100 mx-auto lg:flex lg:justify-between lg:gap-8 lg:main-view">
        <div className="lg:w-4/12 py-20">
          <Profile/>
        </div>
        <div className="lg:w-8/12 pr-4 py-20">
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
