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
      <div className="lg:hidden sticky top-0 left-0 right-0 mx-auto header-section z-50">
        <Header type={'Horizontal'}/>
      </div>
      <div className="max-w-screen-xl h-screen-100 mx-auto lg:flex lg:justify-between lg:gap-8 lg:main-view">
        <div className="lg:w-3/12 lg:py-20 md:py-10 sm:py-10 xs:py-10">
          <Profile />
        </div>
        <div className="lg:w-6/12 px-4 lg:py-20 md:py-10 sm:py-5">
          <main>{children}</main>
        </div>
        <div className="lg:visible lg:w-3/12 px-4 lg:py-20 md:py-10 sm:py-5">
          <Header type={'Vertical'}/>
        </div>
      </div>
    </div>
  )
}

export default Layout
