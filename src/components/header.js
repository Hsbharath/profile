import * as React from "react"
import Navbar from "./navbar"

const Header = ({ type }) => {
  const nvdata = {
    type: "Vertical",
    name: "About",
  }

  const nhdata = {
    type: "Horizontal",
    name: "About",
  }

  return (
    <>
      {type === "Horizontal" ? (
        <header className="xs:visible sm:visible w-full container mx-auto">
          <Navbar type={nhdata} />
        </header>
      ) : (
        <header className="lg:fixed lg:top-25 md:visible lg:visible sm:invisible xs:invisible mx-auto">
          <Navbar type={nvdata} />
        </header>
      )}
    </>
  )
}

export default Header
