import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const projects = () => (
  <div className="lg:py-20 md:py-10 sm:py-5 xs:py-5">
    <div className="flex items-center justify-start mb-6">
      <h1 className="title lg:text-4xl text-4xl antialised line-clamp-1 font-bold lg:pb-7 md:pb-7">
        Projects
      </h1>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="text-[theme(colors.cyanaqua)] deg-45 ml-3 lg:mb-3"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => (
        <div className="bg-[theme(colors.cyanaqua)] h-28 rounded" key={index}>
          {value}
        </div>
      ))}
    </div>
  </div>
)

export default projects
