import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const experience = () => {
  return (
    <div className="lg:pt-20 md:pt-20 sm:py-5 xs:py-5">
      <div className="data-section">
        <div className="flex items-center justify-start mb-6">
          <h1 className="title lg:text-4xl text-4xl antialised line-clamp-1 font-bold lg:pb-7 md:pb-7">
            Experience
          </h1>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[theme(colors.cyanaqua)] deg-45 ml-3 lg:mb-3"
          />
        </div>
        <div>
          {[1, 2, 3, 4].map((value, index) => (
            <div className="w-full min-h-28 rounded mb-3" key={index}>
              <div className="flex gap-4">
                <p className="flex text-[theme(colors.cyanaqua)]">2016</p>
                <div className="flex-1 bg-[theme(colors.cyanaqua)] h-32 rounded">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default experience
