import React from 'react'
import '../css/single-contact.css'
import contactIcon from '../Images/contact-icon.webp'


const Contact = ({firstName, email, contact}) => {
  return (
    <>
      <div className='contacts-repr'>

        <div className='contact-icon-div'>
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
        <img src={contactIcon} alt="" />
        </div>

        <h3>{firstName}</h3>
        <p>{email}</p>
        <p>09015618845</p>
      </div>
    </>
  )
}

export default Contact