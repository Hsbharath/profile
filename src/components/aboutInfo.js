import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const aboutInfo = () => {
  const pagetitle = (
    <div className="flex items-baseline justify-start">
      <h1 className="title lg:text-4xl text-4xl antialised line-clamp-1 font-bold lg:pb-7 md:pb-7">
        About
      </h1>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="text-[theme(colors.cyanaqua)] deg-45 ml-3 lg:mb-3"
      />
    </div>
  )
  const data1 = (
    <p className="lg:text-left md:text-left sm:text-left xs:text-left">
      With over 7 years of experience in the dynamic realm of web development, I
      have had the privilege of working with a diverse range of front-end
      technologies. Throughout my journey, I have witnessed the ever-evolving
      landscape of the web and continuously honed my skills to stay at the
      forefront of industry trends.
    </p>
  )
  const data2 = (
    <p className="lg:text-left md:text-left sm:text-left xs:text-left">
      My passion for web development stems from a fascination with creating
      visually stunning and user-friendly experiences on the digital canvas. I
      possess a strong command of HTML, CSS, and JavaScript, leveraging these
      fundamental building blocks to craft elegant, responsive, and intuitive
      websites.
    </p>
  )
  const data3 = (
    <p className="lg:text-left md:text-left sm:text-left xs:text-left">
      Over the years, I have had the opportunity to collaborate on numerous
      projects, both independently and within teams. This exposure has not only
      enriched my technical proficiency but also sharpened my communication and
      problem-solving abilities. I thrive in an environment where I can
      contribute my creativity and expertise to deliver high-quality solutions
      tailored to meet clients' unique needs.
    </p>
  )
  // const data4 = (
  //   <p className="lg:text-left md:text-left sm:text-left xs:text-left">
  //     As a lifelong learner, I am always eager to expand my skill set and
  //     embrace emerging technologies. I have a solid understanding of popular
  //     front-end frameworks like React and Angular, allowing me to develop
  //     dynamic and interactive web applications efficiently. Additionally, I stay
  //     updated with the latest design principles and UX trends to create engaging
  //     and visually appealing interfaces.
  //   </p>
  // )
  // const data5 = (
  //   <p className="lg:text-left md:text-left sm:text-left xs:text-left">
  //     I approach each project with meticulous attention to detail and a
  //     commitment to delivering exceptional results. I am adept at transforming
  //     complex requirements into practical and elegant solutions, optimizing
  //     performance and ensuring seamless user experiences across different
  //     devices and platforms.
  //   </p>
  // )
  // const data6 = (
  //   <p className="lg:text-left md:text-left sm:text-left xs:text-left">
  //     Beyond my technical prowess, I am a dedicated team player who thrives in a
  //     collaborative environment. I value open communication, constructive
  //     feedback, and a shared commitment to excellence. My goal is not only to
  //     meet client expectations but to exceed them, forging long-lasting
  //     relationships built on trust and satisfaction.
  //   </p>
  // )
  // const data7 = (
  //   <p className="lg:text-left md:text-left sm:text-left xs:text-left">
  //     Thank you for taking the time to explore my portfolio. I invite you to
  //     browse through my projects and witness firsthand the passion and expertise
  //     that I bring to every endeavor. If you have any inquiries or potential
  //     collaborations, please don't hesitate to reach out. I look forward to
  //     connecting with you and embarking on new and exciting web development
  //     journeys together.
  //   </p>
  //)

  const items = [pagetitle, data1, data2, data3]

  return (
    <div className="lg:pt-20 md:pt-10 sm:py-5 xs:py-5">
      <div className="data-section">
        {items.map((item, i) => (
          <div className="mb-6" key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default aboutInfo
