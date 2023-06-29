import * as React from "react"
import Navbar from "./navbar"

const Header = ({type}) => {

  const nvdata = {
    'type': 'Vertical',
    'name': 'About'
  }

  const nhdata = {
    'type': 'Horizontal',
    'name': 'About'
  }

  return (
    <>
    {
      type === 'Horizontal' ?
     <header className="xs:visible sm:visible w-full container mx-auto">
      <Navbar type={nhdata}/>
    </header>
    :
    <header className="md:visible lg:visible w-full container mx-auto">
      <Navbar type={nvdata}/>
    </header>
    }
  </>
  )
}

export default Header
