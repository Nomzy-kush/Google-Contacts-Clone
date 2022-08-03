import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import '../css/contacts.css'
import contactIcon from '../Images/contact-icon.webp'

const Contacts = () => {


  return (
    <>

    <Navbar />
    <section className='contacts-section'>
    <Menu />

    <main className='contacts-main'>
    
      <table>
        <th>Name</th>
        <th className='th-email'>Email</th>
        <th className='th-number'>Phone Number</th>
        <th>Job title & Company</th>
        <svg width="20" height="20" viewBox="0 0 24 24" class="NSy2Hd cdByRd RTiFqe undefined"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>        
      </table>

      <p className='contacts-no'>CONTACTS({Contacts.length})</p>



    <article>
      <div className='contacts-repr'>

        <div className='contact-icon-div'>
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
        <img src={contactIcon} alt="" />
        </div>

        <h3>Onome</h3>
        <p>+2349015618845</p>
      </div>
    </article>

    </main>

    </section>

    </>
  )
}

export default Contacts