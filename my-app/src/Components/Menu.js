import React, {useEffect} from 'react'
import GoogleLogo from '../Images/google-logo.jpg'
import '../css/Home.css'
import { Link } from 'react-router-dom'

const Menu = () => {

   useEffect(() => {

  const removeModal = (e) => {
  const modalDiv = document.querySelector('.create-contactModal')
  if (e.path[0].tagName !== 'BUTTON') {
  }
    modalDiv.style.display = 'none';
}

  document.body.addEventListener('click', removeModal, true)

  return () => document.body.removeEventlistener('click', removeModal, false)
}, [])


const toggleFunction = () => {
  const createLabel = document.querySelector('.create-labelDiv')
  if (createLabel.style.display === "none") {
    createLabel.style.display = "flex";
  } else {
    createLabel.style.display = "none";

  }

}


const activateModal = () => {
  const modalDiv = document.querySelector('.create-contactModal')
  if (modalDiv.style.display === 'none') {
    modalDiv.style.display = 'flex';
  } else {
    modalDiv.style.display = 'none'
  }
}


  return (
    <>
      <article className="show-hideDiv">
        <Link to='/createcontact' style={{ textDecoration: 'none' }}>
        <aside>
          <div className="create-contactModal">
            <svg className='modal-icon' width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
            </svg>
            <p className="create-a-contact">Create a Contact</p>
          </div>
        </aside>
        </Link>

        <div className="create-contactDiv">
          <button className="create-contact" onClick={activateModal}>
              <svg
                className="create-contactIcon"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path fill="#34A853" d="M16 16v14h4V20z"></path>
                <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
                <path fill="none" d="M0 0h36v36H0z"></path>
              </svg>
            <p className="create-contactText">Create contact</p>
          </button>

          <div className='google-logoDiv'>
              <img src={GoogleLogo} alt="" />
            <p>Contacts</p>
          </div>

          <ul className="contacts-overallDiv">
            <Link to='/contacts' style={{ textDecoration: 'none' }}>
            <li className="contacts-div">
              <svg
                id="contacts-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
              </svg>
              <p className="contacts">Contacts</p>
            </li>
            </Link>
            <li className="contacts-div">
              <svg
                id="contacts-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l4 3.99L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"></path>
              </svg>
              <p className="contacts">Frequently Contacted</p>
            </li>
            <li className="contacts-div">
              <svg
                id="contacts-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-1l1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z"></path>
              </svg>
              <p className="contacts">
                Merge and fix <span className="merge-no">1</span>
              </p>
            </li>
            <hr />
            <li className="contacts-div" onClick={toggleFunction}>
              <svg
                id="contacts-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
              </svg>
              <p className="contacts">Labels</p>
            </li>
            <li className="contacts-div create-labelDiv">
              <svg
                id="contacts-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
              <p className="contacts">Create Label</p>
            </li>
            <hr className="line" />
            <li className="contacts-div">
              <svg
                id="contacts-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m4.41-7.59L11 7.83V16h2V7.83l2.59 2.59L17 9l-5-5-5 5 1.41 1.41z"></path>
              </svg>
              <p className="contacts">Import</p>
            </li>
            <li className="contacts-div">
              <svg
                id="contacts-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z"></path>
              </svg>
              <p className="contacts">Export</p>
            </li>
            <li className="contacts-div">
              <svg
                id="contacts-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-4h8v4zm0-11H8V5h8v3zm2 4.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
              </svg>
              <p className="contacts">Print</p>
            </li>
            <hr className="line" />
            <li className="contacts-div">
              <svg
                id="contacts-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"></path>
              </svg>
              <p className="contacts">Other Contacts</p>
            </li>
            <li className="contacts-div">
              <svg
                id="contacts-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
                <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
              </svg>
              <p className="contacts">Bin</p>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}

export default Menu