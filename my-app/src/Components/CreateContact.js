import React, { useState, useEffect } from "react";
import contactPhoto from '../Images/contact-photo.jpg'
import Navbar from './Navbar'
import Menu from './Menu'
import PhoneInput from 'react-phone-number-input/input'
import '../css/createcontact.css'
import 'react-phone-number-input/style.css'



const CreateContact = () => {

  const [data, setData] = useState()
  const [countryCode, setCountryCode] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    fetch('http://api.worldbank.org/v2/country/?format=json')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      console.log(response)
    })

    .then(data => {
      setData(data)
    })

    .catch(error => {
      console.error('Error fetching data: ', error);
      setError(error)
    })

    .finally(() => {
      console.log(data);
    })
  }, [])

  const handleChangePhone = (e) => {
    let phone = e.target.value
    let countryPhone = ["+123", "+234", "+1", ""]
    let countryCode1 = phone.slice(0, 2)
    let countryCode2 = phone.slice(0, 3)
    let countryCode3 = phone.slice(0, 4)
    let newCountryCode = ""

    if(countryPhone.includes(countryCode1)) {
      newCountryCode = countryCode1
    }
    if(countryPhone.includes(countryCode2)) {
      newCountryCode = countryCode2
    }
    if(countryPhone.includes(countryCode3)) {
      newCountryCode = countryCode3
    }

    if(newCountryCode) {
      console.log(newCountryCode);
    }

  }
  
  
  return (
    <>


    <Navbar />
    <section>
    <Menu />
    <main>
    <aside className='create-contact-headerDiv'>
    <svg width="20" height="20" viewBox="0 0 24 24" class="NSy2Hd cdByRd RTiFqe undefined"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
    <img src={contactPhoto} className='contact-photo' alt="" />
    <div className='manage-label-icon-div'>
    <svg id='manage-label-icon' width="20" height="20" viewBox="0 0 24 24" class="NSy2Hd cdByRd RTiFqe undefined"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>
    </div>
    </aside>

    <hr className='create-contact-headerLine' />

    <aside>
      <div className='create-contact-inputDiv input-div1'>
         <svg id='first-name-icon' width="20" height="20" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></svg>
         <input className='create-contact-input' type="text" placeholder='First name' />
         <svg width="20" height="20" viewBox="0 0 24 24" class="NSy2Hd cdByRd RTiFqe undefined"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg> 
      </div>

      <div className='create-contact-inputDiv input-div2'>
         <input className='create-contact-input' type="text" placeholder='Surname' />
      </div>

      <div className='create-contact-inputDiv input-div3'>
         <svg id='first-name-icon' width="20" height="20" viewBox="0 0 24 24" class="NSy2Hd cdByRd RTiFqe undefined"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></svg>
         <input className='create-contact-input' type="text" placeholder='Company' />
         <svg width="20" height="20" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg> 
      </div>

      <div className='create-contact-inputDiv input-div4'>
         <input className='create-contact-input' type="text" placeholder='Job title' />
      </div>

      <div className='create-contact-inputDiv input-div5'>
         <svg id='first-name-icon' width="20" height="20" viewBox="0 0 24 24" class="NSy2Hd cdByRd RTiFqe undefined"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
         <input className='create-contact-input' type="text" placeholder='Email' />
         <svg width="20" height="20" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg> 
      </div>

      <div className='create-contact-inputDiv  phone-inputDiv'>
        <svg id='first-name-icon' width="20" height="20" viewBox="0 0 24 24" class="NSy2Hd cdByRd RTiFqe undefined"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"></path></svg>
        <div className='flag-div'>
          <img src="" alt="" id="flag-img" className="flagImg"/>
        </div>

        <svg className="first-name-dropIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>

      <PhoneInput
      className='phone-input'
      placeholder='Phone'
      value={data}
      onChange={(e) => handleChangePhone(e)}
      />
      </div>

      </aside>

    </main>

   </section>
    </>
  )
}

export default CreateContact