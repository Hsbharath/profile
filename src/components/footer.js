import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const footer = () => {
  return (
    <div className="py-20">
      <p className="flex flex-wrap items-center justify-bottom">
        <a
          href="https://brittanychiang.com/"
          className="text-[theme(colors.gray)]"
          target="_blank"
          rel="noreferrer"
        >
          Inspired from : Portfolio of Brittany Chiang
        </a>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-[theme(colors.cyanaqua)] deg-45 ml-3"
        />
      </p>
      <p className="text-[theme(colors.gray)]">Coded in Visual Studio Code.</p>
      <p className="text-[theme(colors.gray)]">
        Built with Gatsby.js and Tailwind CSS.
      </p>
      <p className="text-[theme(colors.gray)] mb-3">Deployed on Firebase.</p>
      <p className="flex flex-wrap items-center justify-bottom">
        <a
          href="https://github.com/Hsbharath/profile"
          className="text-[theme(colors.gray)]"
          target="_blank"
          rel="noreferrer"
        >
          Github Repo : Hsbharath/Profile ( Link )
        </a>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-[theme(colors.cyanaqua)] deg-45 ml-3"
        />
      </p>
    </div>
  )
}

export default footer
