import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='flex bg-red-300 justify-between px-10 py-5 items-center'>
      <div>Logo</div>

      <div className='flex gap-10 justify-center items-center'>
      <ul className='flex gap-5'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
       
      </ul>

      <button className='bg-blue-600 rounded p-1 text-white '>
        Mode
      </button>
      </div>

      </div>
    </>
  )
}

export default Navbar
