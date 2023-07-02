/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useState, useEffect } from "react"
import "./layout.css"
import Navbar from "./navbar"
import Profile from "./profile"
import AboutInfo from "./aboutInfo"
import ExperienceInfo from "./experienceInfo"
import ProjectsInfo from "./projectsInfo"
import { dataHorizontal, dataVertical } from "../config"

const Layout = ({ location = "" }) => {
  const path = location.pathname
  if (location.hash) {
    dataHorizontal.name = location.hash.substring(1)
    dataVertical.name = location.hash.substring(1)
  } else {
    dataHorizontal.name = "about"
    dataVertical.name = "about"
  }
  const [typeH, setTypeH] = useState(dataHorizontal)
  const [typeV, setTypeV] = useState(dataVertical)

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        setTypeH({
          type: "Horizontal",
          name: location.hash.substring(1),
        })
        setTypeV({
          type: "Vertical",
          name: location.hash.substring(1),
        })
        if (el) {
          el.scrollIntoView({ behaviour: "smooth" })
          el.focus()
        }
      }, 0)
    }
  }, [path, location.hash])

  return (
    <>
      <div className="relative antialiased">
        <div className="lg:hidden sticky top-0 left-0 right-0 mx-auto header-section z-50">
          <Navbar type={typeH} />
        </div>
      </div>
      <div className="max-w-screen-xl h-screen-100 mx-auto lg:flex lg:justify-between lg:gap-8 lg:main-view relative">
        <div className="xl:w-[300px] lg:w-[300px] lg:py-20 md:py-10 sm:py-5 xs:py-5">
          <Profile />
        </div>
        <div className="lg:bg-[theme(colors.bodybg0)] h-100 xl:w-[600px] lg:w-[600px] px-4">
          <section id="about">
            <AboutInfo />
          </section>
          <section id="experience">
            <ExperienceInfo />
          </section>
          <section id="projects">
            <ProjectsInfo />
          </section>
          <div className="py-20">
            <p className="text-[theme(colors.gray)]">
              Coded in Visual Studio Code. Built with Gatsby.js and Tailwind
              CSS, deployed with Firebase.
            </p>
          </div>
        </div>
        {/* <div className="xl:visible xl:w-[300px] lg:visible lg:w-[300px] px-4 lg:py-20 md:py-10 sm:py-0 xs:py-0">
          <Navbar type={typeV} />
        </div> */}
        <div className="xl:w-[300px] lg:w-[300px] lg:py-20 md:py-10 sm:py-5 xs:py-5">
          <div className="fixed xl:w-[250px] lg:w-[200px]">
            <Navbar type={typeV} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
