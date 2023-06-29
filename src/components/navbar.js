import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-center space-x-4 py-3">
        {[
            ['About', '/about'],
            ['Experience', '/experience'],
            ['Projects', '/projects']
        ].map(([title, url]) => (
            <Link to={url} key={url} className='py-2 title text-2xl font-semibold'>{title}</Link>
        ))}
    </nav>
  )
}

export default Navbar