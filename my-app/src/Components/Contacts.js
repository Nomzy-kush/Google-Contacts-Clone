import React, { useState } from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import '../css/contacts.css'
import Contact from './Contact'

const Contacts = ({ contacts, setContacts }) => {

  return (
    <>

    <Navbar />
    <section className='contacts-section'>
    <Menu />

    <main className='contacts-main'>
    
      <header>
        <p>Name</p>
        <p className='th-email'>Email</p>
        <p className='th-number'>Phone Number</p>
        <p>Job title & Company</p>
        <svg width="20" height="20" viewBox="0 0 24 24" class="NSy2Hd cdByRd RTiFqe undefined"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>        
      </header>

      <p className='contacts-no'>CONTACTS({contacts.length})</p>



    <article>
      {
        contacts.map((contact) => (
          <Contact id={contact.id} firstName={contact.firstName} email={contact.email} contact={contact} setContacts={setContacts} />
        ))}
    </article>

    </main>

    </section>

    </>
  )
}

export default Contacts