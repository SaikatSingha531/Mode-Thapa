import React, { use } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ModeContext'

function Navbar() {

  const {mode , toggleMode}= use(ThemeContext)

  return (
    <>
      <div className={`flex justify-between px-10 py-5 items-center transition-all duration-500 ${mode === "dark" ? "bg-red-800 text-amber-50" : "bg-red-300 text-black"}`}>
      <div>Logo</div>

      <div className='flex gap-10 justify-center items-center'>
      <ul className='flex gap-5'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
       
      </ul>

      <button onClick={toggleMode}
       className='bg-blue-600 rounded p-1 text-white '>
        {mode === "dark" ? "Light " : "Dark" }
      </button>
      </div>

      </div>
    </>
  )
}

export default Navbar
