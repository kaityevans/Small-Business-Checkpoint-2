import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import cookie from "cookie";
import Listing from "./Components/Listing";
import Login from "./Components/Login";
import Details from "./Components/Details";
import adminListing from "./Components/AdminListing";
import add from "./Components/Add";
// import Logout from "./Components/Logout";

export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/Login" />
  );
};

export const deleteCookie = () => {
  return (document.cookie = cookie.serialize("loggedIn", null, { maxAge: 0 }));
};

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Listing />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Details" element={<Details />}></Route>
      <Route
        path="/adminListing"
        element={<ProtectedRoute component={adminListing} />}
      />
      <Route path="/Add" element={<ProtectedRoute component={add} />} />
      {/* <Route path="/Logout" element={<Logout />}></Route> */}
    </Routes>
  );
};

export default Router;
