import React from 'react';
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import { Tooltip } from '@mui/material';
import { VehicleConditionProps } from '../types/vehicle';


const VehicleCondition: React.FC<VehicleConditionProps> = ({ condition }) => {
  return (
    <Tooltip title={condition === "GOOD" ? "Good Condition" : "Bad Condition"}>
      {condition === "GOOD" ? <MoodIcon color="success" /> : <MoodBadIcon color="error" /> }
    </Tooltip>
  );
};

export default VehicleCondition;
