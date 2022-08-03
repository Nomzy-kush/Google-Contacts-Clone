import React from 'react'
import CreateContact from './CreateContact'
import Contacts from './Contacts'
import { Routes, Route, Link } from 'react-router-dom'


const Home = () => {



  return (
    <>

    <Routes>
      <Route path='/' element={<Contacts />}></Route>
      <Route path='/createcontact' element={<CreateContact />}/>

      <Route path='/contacts' element={<Contacts />} />
    </Routes>
    </>  
  )
}

export default Home