/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useEffect } from "react"
import "./layout.css"
import Header from "./header"
import Profile from "./profile"
import AboutInfo from "./aboutInfo"
import ExperienceInfo from "./experienceInfo"
import ProjectsInfo from "./projectsInfo"

const Layout = () => {
  const path = window.location.hash

  useEffect(() => {
    if (path && path !== "/") {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
          el.focus()
        }
      }, 0)
    }
  }, [path])

  return (
    <>
      <div className="relative antialiased">
        <div className="lg:hidden sticky top-0 left-0 right-0 mx-auto header-section z-50">
          <Header type={"Horizontal"} />
        </div>
      </div>
      <div className="max-w-screen-xl h-screen-100 mx-auto lg:flex lg:justify-between lg:gap-8 lg:main-view relative">
        <div className="xl:w-[300px] lg:w-[300px] lg:py-20 md:py-10 sm:py-10 xs:py-10">
          <Profile />
        </div>
        <div className="xl:w-[600px] lg:w-[600px] px-4">
          <div id="about">
            <AboutInfo />
          </div>
          <div id="experience">
            <ExperienceInfo />
          </div>
          <div id="projects">
            <ProjectsInfo />
          </div>
        </div>
        <div className="xl:visible xl:w-[300px] lg:visible lg:w-[300px] px-4 lg:py-20 md:py-10 sm:py-5">
          <Header type={"Vertical"} />
        </div>
      </div>
    </>
  )
}

export default Layout
