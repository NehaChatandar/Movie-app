import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <NavLink className='text-decoration-none' to="/">
              <div className='d-flex justify-content-between'>
                <p className='title'><img src="/assets/icon.jpg" alt="logo" className='logo-size' />Stream movie</p>
                <button className='back-button mt-3'>Back</button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar
