import React, { useContext, useState } from "react";
import { context } from "../API/Provider";

export default function Register() {
  const {register,token}=useContext(context)
  
  const [user, setuser] = useState({});

  const handlechange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };


  if (token) {
    window.location = "/";
    return "";
  }
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='form-group col-md-6 offset-3'>
              <input
                placeholder='name'
                onChange={handlechange}
                name='name'
                type='text'
                className='form-control mt-2'
              />
              <input
                placeholder='email'
                onChange={handlechange}
                name='email'
                type='text'
                className='form-control mt-2'
              />
              <input
                placeholder='password'
                onChange={handlechange}
                name='password'
                type='password'
                className='form-control mt-2'
              />
              <button
                onClick={()=>register(user)}
                className='btn btn-info mt-2 form-control'
              >
                register
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}
