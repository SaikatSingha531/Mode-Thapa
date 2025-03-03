import { createContext, useState } from "react";

export const ThemeContext = createContext()


export const ThemeProvider = ({children})=>{

    const [mode, setmode] = useState("dark")

    const toggleMode =()=>(
        setmode((pre)=> pre === "dark" ? "light" : "dark")
    )


    return <ThemeContext.Provider value={{mode , toggleMode}}>
        {children}
    </ThemeContext.Provider>
}