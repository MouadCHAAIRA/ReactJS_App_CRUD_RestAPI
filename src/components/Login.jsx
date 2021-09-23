import React, { useContext, useState } from "react";
import { context } from "../API/Provider";

export default function Login() {
    const {login,token}=useContext(context)

  const [user, setuser] = useState({});

  const handlechange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  
  if(token)
  {
    window.location="/"
    return ""
  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="form-group col-md-6 offset-3">
             
            <input
              placeholder="email"
              onChange={handlechange}
              name="email"
              type="text"
              className="form-control mt-2"
            />
            <input
              placeholder="password"
              onChange={handlechange}
              name="password"
              type="password"
              className="form-control mt-2"
            />
            <button
             onClick={()=>login(user)}
              className="btn btn-info mt-2 form-control"
            >
              login
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
