import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
// import Modal from "./Modal";
import cities from "../assets/cities.json";
import LoadScreen from "./LoadScreen";
import SideBar from "./SideBar";
// import HouseMarker from "./HouseMarker";

// const markerIcon = {
//   url: "./house.svg",
//   scaledSize: new window.google.maps.Size(50, 50),
// };

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
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
  const onClose = () => {
    setSelectedCity(null);
  };

  return (
    <div className="App w-screen font-sans h-screen  ">
      {!isLoaded ? (
        <LoadScreen />
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
          {cities.map((city) => (
            <MarkerF
              key={city.id}
              position={{ lat: city.latitude, lng: city.longitude }}
              onClick={() => {
                setSelectedCity(city);
                console.log("hook", selectedCity);
                console.log("param", city);
              }}
            />
          ))}
          {selectedCity && (
            <SideBar location={selectedCity} onClose={onClose} />
          )}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
