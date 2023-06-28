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
    <div className="w-screen mx-auto">
      <div className="w-full line">
        <Header/>
      </div>
      <div className="container lg:mx-auto px-6">
      <main className="mt-9">
        <div className="flex xs:flex-wrap w-full items-start justify-center">
          <div className="md:w-2/5 xs:w-full px-5">
            <Profile/>
          </div>
          <div className="md:w-3/5 xs:w-full px-5">
            {children}
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}

export default Layout
