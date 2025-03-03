
import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import { ThemeProvider } from './Context/ModeContext'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <><Navbar/><Home/></>
  },
  {
    path:"/about",
    element:<><Navbar/><About/></>
  },
  {
    path:"/contact",
    element:<><Navbar/><Contact/></>
  }
])

function App() {

  return (
    <>
    <ThemeProvider>

    <RouterProvider router={router}/>
    </ThemeProvider>
    </>
  )
}

export default App
