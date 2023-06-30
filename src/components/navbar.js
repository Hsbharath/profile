import React, { useState } from "react"
import { Link } from "gatsby"
import Dot from './dot';

const  Navbar = ({type}) => {

  const [name, setName] = useState(type.name);
  
  return (
    <>
    {
      type.type === "Horizontal" ?
      <nav className="flex flex-wrap items-center justify-center space-x-4 py-3">
        {[
          ["About", "/#about"],
          ["Experience", "/#experience"],
          ["Projects", "/#projects"],
        ].map(([title, url]) => (
          <Link to={url} key={url} className="py-2 title text-2xl font-semibold">
            {title}
          </Link>
        ))}
      </nav>
      :
      <ul className="list-unstyled lg:py-28 md:py-10 nv-list">
        {[
          ["About", "/#about"],
          ["Experience", "/#experience"],
          ["Projects", "/#projects"],
        ].map(([title, url]) => (
          <li className="mb-4 pl-3 flex items-center justify-start" key={url}>
            <Dot active={name === title}/>
            <Link to={url} className="pl-5" onClick={() => setName(title)}>{title}</Link>
          </li>
        ))}
      </ul>
    }
    </>
  )
}

export default Navbar
