import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { checkAuth, deleteCookie } from "../routes";
import Button from "@mui/material/Button";
// import cookie from "cookie";

export default function Header({ title = "Small Business Application" }) {
  // const cookies = cookie.parse(document.cookie);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="success" position="static">
        <Toolbar>
          <Typography
            align="left"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          <ul className="Header-Links">
            <li>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Listings
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Login"
              >
                Login
              </Link>
            </li>
            {checkAuth() && (
              <li>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/AdminListing"
                >
                  Admin Listings
                </Link>
              </li>
            )}
            {checkAuth() && (
              <li>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/Add"
                >
                  Add a Listing
                </Link>
              </li>
            )}
            <li>
              <Button style={{ color: "white" }} onClick={deleteCookie}>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Logout
                </Link>
              </Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
