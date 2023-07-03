import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const experience = () => {
  const exp_data = [
    {
      companyname: "The Tranzonic Companies",
      address: "Cleveland, OH",
      designation: "Web Developer",
      details:
        " I have successfully contributed to multiple production-level projects. These endeavors required meticulous planning, collaboration, and the implementation of industry best practices. From the outset, I actively engaged with stakeholders to thoroughly understand project requirements, ensuring that deliverables aligned with their objectives. By leveraging a variety of programming languages, frameworks, and technologies, I developed robust and scalable web applications that seamlessly integrated with existing systems. ",
    },
    {
      companyname: "Dell International Services",
      address: "Bengaluru, Karnataka",
      designation: "Software developer",
      details:
        " I have successfully contributed to multiple production-level projects. These endeavors required meticulous planning, collaboration, and the implementation of industry best practices. From the outset, I actively engaged with stakeholders to thoroughly understand project requirements, ensuring that deliverables aligned with their objectives. By leveraging a variety of programming languages, frameworks, and technologies, I developed robust and scalable web applications that seamlessly integrated with existing systems. ",
    },
    {
      companyname: "Easymate Technologies",
      address: "Bengaluru, KA",
      designation: "Web Developer",
      details:
        " I have successfully contributed to multiple production-level projects. These endeavors required meticulous planning, collaboration, and the implementation of industry best practices. From the outset, I actively engaged with stakeholders to thoroughly understand project requirements, ensuring that deliverables aligned with their objectives. By leveraging a variety of programming languages, frameworks, and technologies, I developed robust and scalable web applications that seamlessly integrated with existing systems. ",
    },
  ]
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
          {[0, 1, 2].map((value, index) => (
            <div className="w-full min-h-28 rounded mb-3" key={index}>
              <div className="pb-4">
                <p className="flex text-[theme(colors.gray)] text-sm font-semibold">
                  MAY 2016 - JUN 2023
                </p>
                <div className="flex-1 min-h-32">
                  <p className="text-lg font-semibold mb-0">
                    {exp_data[index].companyname}
                  </p>
                  <p className="text-sm font-semibold text-gray mb-0">
                    {exp_data[index].address}
                  </p>
                  <p className="text-md font-semibold text-gray mb-2">
                    {exp_data[index].designation}
                  </p>
                  <p className="mb-0 pl-5">{exp_data[index].details}</p>
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
