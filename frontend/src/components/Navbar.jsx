import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";

function Navbar() {
  
  const isAuthenticated = true;
  const user = {
    role:"client"
  }

  return (
    <nav className="bg-white shadow-md py-8 px-10">
            {isAuthenticated ? (
        user.role === 'client' ? (      <div className="flex justify-between items-center">
          <div className="flex items-center space-x-11">
            <ul className="flex space-x-9 items-center">
              <li className="text-5xl font-bold text-black font-permanent-marker"><Link to='/'>Flex Work</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to=''>Post Job</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to=''>Proposals</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to=''>All Jobs</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to=''>Messages</Link></li>
            </ul>
          </div>
          <div className="flex space-x-11">
            <ul className="flex space-x-9 items-center">
              <li>
                <Link to='' className="text-3xl text-white bg-primary rounded-2xl px-8 py-5 hover:bg-primaryHover">Log out</Link>
              </li>
              <li>
                <CgProfile className='size-16'/>
              </li>
            </ul>
          </div>
        </div>
        ) : (
          <div className="flex justify-between items-center">
          <div className="flex items-center space-x-11">
            <ul className="flex space-x-9 items-center">
              <li className="text-5xl font-bold text-black font-permanent-marker"><Link to=''>Flex Work</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to='/find-talent'>Find Work</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to='/find-work'>Saved Jobs</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to='/why-flexwork'>Proposals</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to=''>Messages</Link></li>
            </ul>
          </div>
          <div className="flex space-x-11">
            <ul className="flex space-x-9 items-center">
              <li>
                <Link to='' className="text-3xl text-white bg-primary rounded-2xl px-8 py-5 hover:bg-primaryHover">Log out</Link>
              </li>
              <li>
                <CgProfile className='size-16'/>
              </li>
            </ul>
          </div>
        </div>
        )
      ) : (
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
              <Link to='/login' className="text-3xl hover:text-primaryHover">Log in</Link>
            </li>
            <li>
              <Link to='/signup' className="text-3xl text-white bg-primary rounded-2xl px-8 py-5 hover:bg-primaryHover">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
      )}
    </nav>
  )
}

export default Navbar
