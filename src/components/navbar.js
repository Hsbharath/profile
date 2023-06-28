import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-center space-x-4 p-3">
        {[
            ['Home', '/'],
            ['About', '/about'],
            ['Experience', '/experience'],
            ['Projects', '/projects']
        ].map(([title, url]) => (
            <Link to={url} key={url} className='p-2'>{title}</Link>
        ))}
    </nav>
  )
}

export default Navbar