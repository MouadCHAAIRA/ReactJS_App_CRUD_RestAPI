import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../API/Provider";
import { IoIosAddCircle } from 'react-icons/io'
import { GrLogout } from 'react-icons/gr'
   
export default function Navbar() {
  const {logout}=useContext(context)
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Navbar
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          {localStorage.getItem('token') ? (
            <>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  products
                </Link>
              </li>

              <li className='nav-item active'>
                <Link className='nav-link' to='/addproduct'>
                  <IoIosAddCircle />
                </Link>
              </li>

              <li class='nav-item'>
                <button onClick={logout} class='dropdown-item'>
                  <GrLogout />
                </button>
              </li>
            </>
          ) : (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
