import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import FreenowCar from '../assets/free-now.svg';
import sharenowCar from '../assets/share-now.svg';
import L from 'leaflet'; // Import Leaflet
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import {Props} from '../types/vehicle';


const MapComponent: React.FC<Props> = ({ vehicles, onSelect, selected }) => {
  // Function to get the appropriate custom icon URL based on vehicle type
  console.log("selected",selected);
  const getCustomIcon = (type: string) => {
    console.log("type",type);
    switch (type) {
      case "FREENOW":
        return FreenowCar; 
      case 'SHARENOW':
        return sharenowCar; 
      default:
        return FreenowCar;
    }
  };

  // Function to create a custom Leaflet icon
  const createCustomIcon = (iconUrl: string) => {
    return new L.Icon({
      iconUrl,
      iconSize: [50, 50], // Size of the icon
      iconAnchor: [15, 30], // Anchor point of the icon
      popupAnchor: [0, -30], // Position of the popup relative to the marker
    });
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <MapContainer
        center={[53.5511, 9.9937]} // Start with a central location, adjust as needed
        zoom={10} // Adjust zoom level as needed
        style={{ height: '100%', width: '100%' }} // Ensure map takes full container space
        scrollWheelZoom={true} // Optional: Allow zoom via scroll wheel
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {vehicles.map((vehicle) => {
          const iconUrl = getCustomIcon(vehicle.provider); // Get the correct icon URL based on vehicle provider
          const customIcon = createCustomIcon(iconUrl); // Create a custom icon with the URL

          return (
            <Marker
              key={vehicle.id}
              position={[
                vehicle?.coordinate?.latitude ?? 0,
                vehicle?.coordinate?.longitude ?? 0,
              ]}
              eventHandlers={{ click: () => onSelect(vehicle) }}
              icon={customIcon} // Apply the dynamic custom icon
            >
              <Popup>{vehicle.licencePlate}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
