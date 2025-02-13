import React from 'react';
import { Tooltip } from '@mui/material';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import Battery3BarIcon from '@mui/icons-material/Battery3Bar';
import Battery2BarIcon from '@mui/icons-material/Battery2Bar';
import Battery1BarIcon from '@mui/icons-material/Battery1Bar';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';
import { VehicleFuelLevelProps } from '../types/vehicle';

const LevelIcons = [
  { threshold: 80, icon: <Battery6BarIcon color="primary" /> },
  { threshold: 60, icon: <Battery5BarIcon color="primary" /> },
  { threshold: 40, icon: <Battery4BarIcon color="primary" /> },
  { threshold: 20, icon: <Battery3BarIcon color="warning" /> },
  { threshold: 10, icon: <Battery2BarIcon color="warning" /> },
  { threshold: 0,  icon: <Battery1BarIcon color="error" /> },
  { threshold: -1, icon: <BatteryAlertIcon color="error" /> }, // For below 0%
];

const VehicleFuelLevel: React.FC<VehicleFuelLevelProps> = ({ fuel = 0 }) => {
  // Find the correct icon based on the fuel value
  const batteryIcon = LevelIcons.find(data => fuel >= data.threshold)?.icon || <BatteryAlertIcon color="error" />;

  return (
    <Tooltip title={`Fuel Level ${fuel}% Battery`}>
      {batteryIcon}
    </Tooltip>
  );
};

export default VehicleFuelLevel;
