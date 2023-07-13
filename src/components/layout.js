import * as React from "react"
import { useState, useEffect } from "react"
import "./layout.css"
import Navbar from "./navbar"
import Profile from "./profile"
import AboutInfo from "./aboutInfo"
import ExperienceInfo from "./experienceInfo"
import ProjectsInfo from "./projectsInfo"
import Footer from "./footer"
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

    const handlescroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY
      sections.forEach(section => {
        const { top, bottom } = section.getBoundingClientRect()
        if (top <= scrollPosition && bottom >= scrollPosition) {
          setTypeV({
            type: "Vertical",
            name: section.id,
          })
        }
      })
    }

    window.addEventListener("scroll", handlescroll)
    return () => {
      window.removeEventListener("scroll", handlescroll)
    }
  }, [path, location.hash])

  return (
    <>
      <div className="relative antialiased">
        <div className="lg:hidden sticky top-0 left-0 right-0 mx-auto header-section z-50">
          <Navbar type={typeH} />
        </div>
      </div>
      <div className="max-w-screen-xl h-screen-100 mx-auto lg:flex lg:justify-between lg:gap-8 lg:main-view sm:px-16 relative">
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
          <Footer />
        </div>
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
