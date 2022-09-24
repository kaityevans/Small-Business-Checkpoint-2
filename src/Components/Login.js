import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
// import { Link } from "react-router-dom";
// import { checkAuth } from "../routes";

const Login = () => {
  const navigate = useNavigate();
  // e.preventDefault();
  // document.cookie = "loggedIn=true;MaxAge=60000";
  // navigate("/");

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)
    document.cookie = "loggedIn=true;MaxAge=60000";
    navigate("/AdminListing");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            // onClick={() => checkAuth()}
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            {/* <Link to="/AdminListing"> */}
              Login
              {/* </Link> */}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
