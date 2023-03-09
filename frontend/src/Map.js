import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import Modal from "./Modal";
import cities from "./cities.json";
import HouseMarker from "./HouseMarker";

const markerIcon = {
  url: "./house.svg",
  scaledSize: new window.google.maps.Size(50, 50),
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAJdpbcE0I1ea-BsXL5QOEtDqZC6PBKAJ0",
    libraries: ["geometry", "drawing", "places"],
  });
  const center = useMemo(
    () => ({ lat: -0.2316922446867348, lng: 36.06853200047009 }),
    []
  );
  const [selectedCity, setSelectedCity] = useState(null);
  const kenyaBounds = {
    north: 4.66229,
    east: 41.904251,
    south: -4.678978,
    west: 33.907959,
  };

  return (
    <div className="App w-screen font-sans h-screen  ">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={center}
          zoom={8.6}
          options={{
            mapId: "263bdbde380e358e",
            restriction: {
              latLngBounds: kenyaBounds,
              strictBounds: false,
            },
          }}
        >
          {cities.map((property) => (
            <Marker
              key={property.id}
              icon={<HouseMarker />}
              position={{ lat: property.latitude, lng: property.longitude }}
              onClick={() => {
                setSelectedCity(property);
                console.log(property);
              }}
            />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
