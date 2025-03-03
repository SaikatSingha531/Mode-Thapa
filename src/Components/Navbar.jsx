import React from 'react'

function Navbar() {
  return (
    <>
      <div className='flex bg-red-300 justify-between px-10 py-5 items-center'>
      <div>Logo</div>

      <div className='flex gap-10 justify-center items-center'>
      <ul className='flex gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className='bg-blue-600 rounded p-1 text-white'>
        Mode
      </button>
      </div>

      </div>
    </>
  )
}

export default Navbar
