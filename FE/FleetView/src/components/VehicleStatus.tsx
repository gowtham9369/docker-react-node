import React from 'react';
import { Chip } from '@mui/material';
import { VehicleStatusProps } from '../types/vehicle';

const VehicleStatus: React.FC<VehicleStatusProps> = ({ state }) => {
  // Determine the chip color based on the vehicle state
  const chipColor = state === 'ACTIVE' ? 'default' : 'warning';

  return (
    <Chip 
      label={state} 
      color={chipColor} 
      sx ={{ color: 'black', borderRadius: 1, textTransform: 'capitalize' }}
      size="small"
      variant="outlined"
    />
  );
};

export default VehicleStatus;
