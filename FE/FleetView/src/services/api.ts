import axios from 'axios';
import { Vehicle } from '../types/vehicle';

const API_URL = 'http://localhost:5001';

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  try {
    const freeNowResponse = await axios.get(`${API_URL}/free-now/vehicles`);
    const shareNowResponse = await axios.get(`${API_URL}/share-now/vehicles`);
    
    const freeNowVehicles = freeNowResponse.data.poiList.map((vehicle: any) => ({
      ...vehicle,
      provider: "FREENOW"
    }));
    
    const shareNowVehicles = shareNowResponse.data.placemarks.map((vehicle: any) => ({
      id: vehicle.id,
      coordinate: {
        latitude: vehicle.coordinates[1],
        longitude: vehicle.coordinates[0]
      },
      state: vehicle.state,
      fuel: vehicle.fuel,
      address: vehicle.address,
      licencePlate: vehicle.licencePlate,
      condition: vehicle.condition,
      provider: "SHARENOW"
    }));
    
    const allVehicles = [...freeNowVehicles, ...shareNowVehicles];
    
    allVehicles.sort((a, b) => a.licencePlate.localeCompare(b.licencePlate));
    
    return allVehicles;
  } catch (error) {
    throw new Error("Failed to fetch vehicles");
  }
};
