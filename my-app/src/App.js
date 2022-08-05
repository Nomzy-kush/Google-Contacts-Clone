import React, { useState } from 'react'
import Home from './Components/Home'
import { Routes, Route, Link } from 'react-router-dom'
import CreateContact from '../src/Components/CreateContact'
import Contacts from '../src/Components/Contacts'

const App = () => {

  // const [data, setData] = useState()
  // const [countryCode, setCountryCode] = useState()
  // const [error, setError] = useState();

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('')

  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <Home />

      <Routes>
      <Route path='/' element={<Contacts contacts={contacts} setContacts={setContacts} />}></Route>

      <Route path='/createcontact' element={<CreateContact 
      firstName={firstName} setFirstName={setFirstName}
      surname={surname} setSurname={setSurname}
      email={email} setEmail={setEmail}
      jobTitle={jobTitle} setJobTitle={setJobTitle}
      contacts={contacts} setContacts={setContacts}
       />}/>

      <Route path='/contacts' element={<Contacts />} />
    </Routes>
    </div>
  )
}

export default App