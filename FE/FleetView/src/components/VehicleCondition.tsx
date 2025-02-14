import React from 'react';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { Tooltip } from '@mui/material';
import { VehicleConditionProps } from '../types/vehicle';


const VehicleCondition: React.FC<VehicleConditionProps> = ({ condition }) => {
  return (
    <Tooltip title={condition === "GOOD" ? "Good Condition" : "Bad Condition"}>
      {condition === "GOOD" ? <SentimentSatisfiedOutlinedIcon color="success" /> : <SentimentDissatisfiedOutlinedIcon color="error" /> }
    </Tooltip>
  );
};

export default VehicleCondition;
