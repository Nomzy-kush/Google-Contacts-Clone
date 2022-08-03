import React from 'react'
import Home from './Components/Home'
import {  Routes, Route, Link, } from 'react-router-dom'
import CreateContact from '../src/Components/CreateContact'
import Contacts from '../src/Components/Contacts'

const App = () => {
  return (
    <div>
      <Home />

      <Routes>
        <Route path='/' component = {Home} />

        <Route path='/contacts' component = {Contacts} />

        <Route path='/CreateContact' component = {CreateContact} />
      </Routes>
    </div>
  )
}

export default App