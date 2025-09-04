import './App.css'
import Navbar from './Componnets/Navbar/Navbar'
import Hero from './Componnets/Hero/Hero'
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
  path:'/',
  element: <>
                <Navbar/>
                <Hero/>
           </>,
  errorElement: <div>404 Page not found</div>
 }


])

function App() {
  

  return (
   <RouterProvider router={router} />
  )
}

export default App
