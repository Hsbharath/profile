import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const profile = () => {
  const para2 = "Bharath"
  const para1 = "Hunkunda Sreenivasa"
  const para3 = (
    <p>
      A passionate <br />
      <span className="title2 font-bold tracking-widest">WEB DEVELOPER</span>
      <br /> I love to build user-friendly websites that leave a lasting
      impression.
    </p>
  )

  const icon1 = (
    <p className="icon">
      <FontAwesomeIcon icon={faLocationDot} className="mr-3" />
      <span>Seattle, WA</span>
    </p>
  )
  const icon2 = (
    <p className="icon">
      <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
      <a href="mailto:bharathh.868@gmail.com">bharathh.868@gmail.com</a>
    </p>
  )
  const icon3 = (
    <p className="icon">
      <FontAwesomeIcon icon={faLink} className="mr-3" />
      <a href="https://hsbharath.dev" target="_blank" rel="noreferrer">
        www.hsbharath.dev
      </a>
    </p>
  )

  const icons = [icon1, icon2, icon3]
  const iconsList = icons.map((icon, i) => (
    <li className="py-1" key={i}>
      {icon}
    </li>
  ))

  const social1 = (
    <p>
      <a href="https://github.com/Hsbharath" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-[theme(colors.cyanaqua)]" />
        {}
      </a>
    </p>
  )
  const social2 = (
    <p>
      <a
        href="https://www.linkedin.com/in/iamhsbharath10/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-[theme(colors.cyanaqua)]" />
        {}
      </a>
    </p>
  )

  const socials = [social1, social2]
  const socialsList = socials.map((social, i) => (
    <li className="pr-5" key={i}>
      {social}
    </li>
  ))

  return (
    <div className="w-full mx-auto px-4">
      <h1 className="title lg:text-6xl text-4xl text-cyan-400 antialised line-clamp-1 font-black">
        {para2}
      </h1>
      <h3 className="title text-white text-3xl decoration-8 font-medium pb-3">
        {para1}
      </h3>
      <p className="text-lg mb-6">{para3}</p>
      <ul className="list-unstyled mb-6">{iconsList}</ul>
      <ul className="flex list-unstyled mb-6">{socialsList}</ul>
    </div>
  )
}

export default profile
