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
      <span className="title2 text-[theme(colors.blue)] font-bold tracking-wider">
        WEB DEVELOPER
      </span>
      <br /> I love to build user-friendly websites that leave a lasting
      impression.
    </p>
  )

  const icon1 = (
    <p className="icon flex gap-2 items-center justify-start">
      <FontAwesomeIcon icon={faLocationDot} />
      <span className="flex-1">Seattle, WA</span>
    </p>
  )
  const icon2 = (
    <p className="icon flex gap-2 items-center justify-start">
      <FontAwesomeIcon icon={faEnvelope} />
      <a href="mailto:bharathh.868@gmail.com" className="flex-1">
        bharathh.868@gmail.com
      </a>
    </p>
  )
  const icon3 = (
    <p className="icon flex gap-2 items-center justify-start">
      <FontAwesomeIcon icon={faLink} />
      <a
        href="https://hsbharath.dev"
        target="_blank"
        rel="noreferrer"
        className="flex-1"
      >
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
        <FontAwesomeIcon
          icon={faGithub}
          className="text-[theme(colors.cyanaqua)]"
        />
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
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-[theme(colors.cyanaqua)]"
        />
        {}
      </a>
    </p>
  )

  const socials = [social1, social2]
  const socialsList = socials.map((social, i) => (
    <li className="px-2" key={i}>
      {social}
    </li>
  ))

  return (
    <div className="lg:fixed lg:top-25 lg:w-[300px] px-4">
      <h1 className="title lg:text-5xl text-4xl antialised line-clamp-1 font-bold">
        {para2}
      </h1>
      <h3 className="title text-white text-2xl decoration-8 font-bold pb-3">
        {para1}
      </h3>
      <div className="text-lg mb-6">{para3}</div>
      <ul className="list-unstyled mb-6">{iconsList}</ul>
      <ul className="flex list-unstyled mb-6">{socialsList}</ul>
    </div>
  )
}

export default profile
