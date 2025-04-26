import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-8 px-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-11">
          <ul className="flex space-x-9 items-center">
            <li className="text-5xl font-bold text-black font-permanent-marker"><Link to=''>Flex Work</Link></li>
            <li className="text-3xl"><Link to=''>Find talent</Link></li>
            <li className="text-3xl"><Link to=''>Find work</Link></li>
            <li className="text-3xl"><Link to=''>Why Flexwork</Link></li>
            <li className="text-3xl"><Link to=''>What's new</Link></li>
            <li className="text-3xl"><Link to=''>Pricing</Link></li>
          </ul>
        </div>
        <div className="flex space-x-11">
          <ul className="flex space-x-9 items-center">
            <li>
              <Link to='' className="text-3xl hover:text-primaryHover">Log in</Link>
            </li>
            <li>
              <Link to='' className="text-3xl text-white bg-primary rounded-2xl px-8 py-5 text-blue-600 hover:text-blue-800">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
