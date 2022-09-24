import * as React from "react";
import { Link } from "react-router-dom";
// import Map from "../index"
// import Paper from '@mui/material/Paper';

// function createData(name, Description, Hours, Address) {
//   return { name, Description, Hours, Address };
// }

export default function Details() {
  return (
    <div className="detail-container">
      <h2>Home Slice Pizza</h2>
      <h4>1415 S Congress Ave, Austin, Tex 78704</h4>
      <h4>11AM - 11PM</h4>
      <p>lorem ipsum</p>
      <div className="map-container">
        <img
          src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"
          alt="mapImage"
        ></img>
      </div>
      <div>
        <Link to="/">Back to Listiings</Link>
      </div>
    </div>
  );
}
