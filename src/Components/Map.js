// import React from 'react';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// function Map() {
//   const ref = React.useRef(null);
// const [map, setMap] = React.useState();

// React.useEffect(() => {
//   if (ref.current && !map) {
//     setMap(new window.google.maps.Map(ref.current, {}));
//   }
// }, [ref, map]);

//   const render = (status: Status) => {
//     return <h1>{status}</h1>;
//   };
  
//   <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
//     <YourComponent/>
//   </Wrapper>
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return (
//     <GoogleMap
//       zoom={10}
//       center={center}
//       mapContainerClassName=""
//     >
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }

// export default Map