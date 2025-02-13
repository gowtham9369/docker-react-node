import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { ErrorProps } from '../types/Error';


const Error: React.FC<ErrorProps> = ({ message, open }) => {
  return (
    <Snackbar open={open}>
      <Alert severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Error;
