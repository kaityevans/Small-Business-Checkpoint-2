import * as React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import Add from "./Components/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

// import { Link } from 'react-router-dom';
// import Details from "./Details";

// function createData(name, Description, Hours, Address) {
//   return { name, Description, Hours, Address };
// }

const data = [
  {
    id: 1,
    Name: "Rave On",
    Description:
      "Whether you're looking for a bite for lunch, or a steak dinner, Rave On's got you covered.",
    Hours: "11AM - 9PM",
    Address: "1300 Mac Davis Ln, Lubbock, TX 79401",
  },
  {
    id: 2,
    Name: "Hot & Juicy Seafood & Bar",
    Description:
      "We offer meals of excellent quality and invite you to try our delicious food.",
    Hours: "11AM - 10PM",
    Address: "5004 Frankford Ave Suite 100, Lubbock, TX 79424",
  },
  {
    id: 3,
    Name: "Copper Caboose Restaurant and Sports Grill",
    Description:
      "Entertainment center with midway games & billiards, plus a bar & Mexican-American restaurant.",
    Hours: "11AM - 12AM",
    Address: "5609 Avenue Q, Lubbock, TX 79412",
  },
  {
    id: 4,
    Name: "Bryan's Steaks",
    Description:
      "Steaks & classic sides serced with other American grub in a humble, down-home setting.",
    Hours: "11AM - 8PM",
    Address: "1212 50th St, Lubbock, TX 79412",
  },
];

export default function adminListing() {
  // const [places, setPlaces] = useState(data);

  // const removePlace = () => {
  //   setPlaces((current) =>
  //     current.filter((place) => {
  //       return place.id !== e.target.value;
  //     })
  //   );
  // };
  const removePlace = (id) => {
    // const newData = data.filter((row) => row.id !== id);
    // setPlaces(newData);
  };

  //   setPlaces((data) =>
  //   data.filter((row) => row.id !== id));
  //   return setPlaces
  // }
  //  window.location.reload()
  return (
    <TableContainer component={Paper}>
      <h4>You are logged in as an Admin</h4>
      {/* <Link to="./Details">Details</Link> */}
      <Link to="/Add">Add a Listing</Link>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Hours</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* map over places and place */}
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.Name}</TableCell>
              <TableCell align="left">{row.Description}</TableCell>
              <TableCell align="left">{row.Hours}</TableCell>
              <TableCell align="left">{row.Address}</TableCell>
              <TableCell align="left">
                <DeleteIcon
                  // add onClick method here
                  onClick={() => removePlace(row.id)}
                  className="icon text-red"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
