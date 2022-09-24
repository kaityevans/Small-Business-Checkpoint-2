import * as React from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Map from "../index";

export default function Add() {
  return (
    <div className="Add-main-container">
      <h4>You are logged in as an Admin</h4>
      <Box component="form"
      sx={{
        '& > :not(style)':{ m: 1, width: '90%'},
      }}
      noValidate
      autoComplete="off" 
      className="add-container">
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Address" variant="standard" />
        <TextField
          id="standard-basic"
          label="Hours (ex. 8AM - 9PM)"
          variant="standard"
        />
        <TextField id="standard-basic" label="Description" variant="standard" />
        <Button variant="contained" style={{ width: "300px", margin: "10px" }} type="submit">
          Save
        </Button>
      </Box>
      <div className="map-container">
        <img
          src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"
          alt="mapImage"
        ></img>
        {/* <Map /> */}
      </div>
    </div>
  );
}
