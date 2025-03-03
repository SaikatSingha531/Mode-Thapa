import React, { use } from 'react'
import { ThemeContext } from '../../Context/ModeContext'

const About = () => {
  const {mode} = use(ThemeContext)
  return (

    <>
    <div className={`h-screen w-full ${mode === "dark" ? "bg-blue-700 text-amber-50" : "bg-blue-200"} `}>
        This Is About Component
    </div>
    </>
  )
}

export default About