import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Contacts from '../Contacts/Contacts'
import Error from '../Error/Error'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='portfolio' element={<Portfolio />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contacts' element={<Contacts />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  )
}
