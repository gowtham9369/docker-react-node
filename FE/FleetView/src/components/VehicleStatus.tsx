import React from 'react';
import { Chip } from '@mui/material';
import { VehicleStatusProps } from '../types/vehicle';
import {capitalizeString} from '../utils/capitalizeString';

const VehicleStatus: React.FC<VehicleStatusProps> = ({ state }) => {
  // Determine the chip color based on the vehicle state
  const chipColor = state === 'ACTIVE' ? 'warning' : 'default';

  return (
    <Chip 
      label={capitalizeString(state)}  // Apply formatting
      color={chipColor}
      style={{backgroundColor: state === 'ACTIVE' ?'#FFFCF0' :"#F1F2F4"}} // Add custom background color
      className="vehicle-status"
      sx={{ color: 'black', borderRadius: 1 }}
      size="small"
      variant="outlined"
    />
  );
};

export default VehicleStatus;
