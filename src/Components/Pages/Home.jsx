import React, { use } from 'react'
import { ThemeContext } from '../../Context/ModeContext'

function Home() {
    const {mode} = use(ThemeContext)
  return (
    <>
      <div className={`h-screen w-full ${mode === "dark" ? "bg-black text-amber-50" : "bg-amber-100 text-black"} `}>
        <h1 >
            This Is Home Component
        </h1>
      </div>
    </>
  )
}

export default Home
