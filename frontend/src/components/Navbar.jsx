import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-8 px-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-11">
          <ul className="flex space-x-9 items-center">
            <li className="text-5xl font-bold text-black font-permanent-marker"><Link to=''>Flex Work</Link></li>

            <li className="text-3xl hover:text-primaryHover"><Link to='/find-talent'>Find talent</Link></li>
            <li className="text-3xl hover:text-primaryHover"><Link to='/find-work'>Find work</Link></li>
            <li className="text-3xl hover:text-primaryHover"><Link to='/why-flexwork'>Why Flexwork</Link></li>
            <li className="text-3xl hover:text-primaryHover"><Link to=''>What's new</Link></li>
            <li className="text-3xl hover:text-primaryHover"><Link to=''>Pricing</Link></li>

          </ul>
        </div>
        <div className="flex space-x-11">
          <ul className="flex space-x-9 items-center">
            <li>
              <Link to='/login' className="text-2xl hover:text-primaryHover">Log in</Link>
            </li>
            <li>

              <Link to='/signup' className="text-2xl text-white bg-primary rounded-2xl px-8 py-5 text-blue-600 hover:text-blue-800">Sign up</Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
