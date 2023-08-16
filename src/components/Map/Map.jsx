import React, { useEffect } from "react";
// Importing some Hooks and components from google maps api which we will be using
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import "./map.css";

const libraries = ["places"];
const Map = (props) => {
  // We Have to select some coordinates to give to the map to initially show the map from that point.
  // These are the latitude and longitude of Philadelphia, PA by default
  let center = { lat: Number(props.latitude), lng: Number(props.longitude) };
  // This will update the center whenever the latitude/longitude is changed/updated
  useEffect(() => {
    center = { lat: Number(props.latitude), lng: Number(props.longitude) };
  }, [props.latitude, props.latitude]);

  //This loads our API KEY
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GMA_KEY,
    libraries: libraries,
  });

  // Simple loader
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <main className="map-container">
        <GoogleMap
          center={center}
          zoom={props.zoom}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "2rem",
          }}
          options={{
            streetViewControl: true,
            zoomControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        ></GoogleMap>
      </main>
    </>
  );
};

export default Map;
