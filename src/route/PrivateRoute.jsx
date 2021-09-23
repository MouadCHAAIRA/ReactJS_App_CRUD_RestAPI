import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { context } from "../API/Provider";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(context);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest} 
      render={(props) =>
       token  ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
// view rawPrivateRoute.js hosted with ❤ by GitHub
