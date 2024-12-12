import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar'
import Footer from './footer'
import Card from './card'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Card/>
    {/* <Data/> */}
    <Footer/>
  </StrictMode>,
)




