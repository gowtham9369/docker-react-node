import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import VehicleStatus from './VehicleStatus'; 
import VehicleCondition from './VehicleCondition';
import VehicleFuelLevel from './VehicleFuelLevel';
import {Props} from '../types/vehicle';

const TableComponent: React.FC<Props> = ({ vehicles, onSelect, selected }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow style={{ borderBottom: '2px solid #000' }}>
            <TableCell>Type</TableCell>
            <TableCell>Licence Plate</TableCell>
            <TableCell>Coordinates</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Condition</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow
              key={vehicle.id}
              onClick={() => onSelect(vehicle)}
              className={selected?.id === vehicle.id ? 'selected' : ''}
              style={{ cursor: 'pointer', backgroundColor: selected?.id === vehicle.id ? '#d3f7d3' : '' }}
            >
              <TableCell>{vehicle.provider || '-'}</TableCell>
              <TableCell>{vehicle.licencePlate}</TableCell>
              <TableCell>{vehicle.coordinate ? (<>{vehicle.coordinate.latitude} <br /> {vehicle.coordinate.longitude}</>) : '-'}</TableCell>
              <TableCell>{vehicle.address || '-'}</TableCell>
              <TableCell>
                <VehicleStatus state={vehicle.state} /> 
              </TableCell>
              <TableCell>
                {vehicle?.fuel ? (
                  <VehicleFuelLevel fuel={vehicle.fuel} /> 
                ) : ""}
                <VehicleCondition condition={vehicle.condition} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
