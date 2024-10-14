"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will ensure the code runs only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  const position = [28.014147, 77.812451]; // Coordinates

  return (
    <>
      <div className="text-center mt-10 mb-5">
        <h1 className="text-2xl font-bold">Location</h1>
      </div>

      {/* Map and Address Container */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:space-x-6">
        {/* Map Section */}
        <div className="w-full lg:w-2/3 h-96">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                You are here: <br /> 28.014147, 77.812451
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Address Section */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 lg:ml-4 p-4 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold">Plant Address</h2>
          <p className="text-md font-medium mt-2">
            Gata No. 396/27, Village- Jamanka, Block- Chandos-Gabhana, District-
            Aligarh-202141
          </p>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
