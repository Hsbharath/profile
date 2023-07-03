import React, { useState } from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Dot from "./dot"
import { navLinks } from "../config"

const Navbar = ({ type }) => {
  const [name, setName] = useState(type.name)

  return (
    <>
      {type.type === "Horizontal" ? (
        <nav className="xs:visible sm:visible w-full container mx-auto flex flex-wrap items-center justify-center space-x-4 py-3">
          {navLinks.map((title, index) => (
            <Link
              to={title.url}
              key={index}
              className="py-2 title text-xl font-semibold"
              onClick={() => scrollTo(title.name)}
            >
              {title.name}
            </Link>
          ))}
        </nav>
      ) : (
        <div className="lg:visible md:visible sm:invisible xs:invisible">
          <ul className="w-auto list-unstyled lg:py-28 md:py-10 nv-list">
            {navLinks.map((title, index) => (
              <li
                className="mb-4 pl-3 flex items-center justify-start"
                key={index}
              >
                <Dot active={name.toLowerCase() === title.name.toLowerCase()} />
                <Link
                  to={title.url}
                  className={
                    name.toLowerCase() === title.name.toLowerCase()
                      ? "ml-auto py-1 z-50 border-cyanaqua border-2 bg-bodybg1 rounded-full"
                      : "ml-auto py-1 z-50 border-gray border-2 bg-bodybg1 rounded-full"
                  }
                  onClick={() => setName(title.name)}
                >
                  <span className="px-5">{title.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
