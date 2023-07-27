// import React, { useMemo } from 'react';
// import {
//   GoogleMap, useLoadScript, Marker, InfoWindow,
// } from '@react-google-maps/api';
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from 'use-places-autocomplete';


// export default function Map() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyAQxC9h6Cux5KqQ62OHTAAuAVptA194-bY',
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <MapCb />;
// }
// const containerStyle = {
//   width: '30vw',
//   height: '30vh',
// };
// function MapCb() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return (
//     <GoogleMap mapContainerStyle={containerStyle} zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }
