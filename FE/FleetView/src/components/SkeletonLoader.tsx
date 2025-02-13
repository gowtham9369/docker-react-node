import React from 'react';
import { Box, Skeleton, Stack } from '@mui/material';

const SkeletonLoader: React.FC = () => {
  const rows = 10; // You can adjust this to simulate more rows
  
  return (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
      <Box flex={1}>
        {/* Skeleton for the Map */}
        <Skeleton variant="rectangular" width="100%" height={400} sx={{ marginRight: 1,borderRadius: 2 }}/>
      </Box>
      <Box flex={2}>
        {/* Table Header Skeleton */}
        <Box display="flex" sx={{ marginBottom: 2 }}>
          <Skeleton variant="rectangular" width="20%" height={40} sx={{ marginRight: 1,borderRadius: 2 }} />
          <Skeleton variant="rectangular" width="20%" height={40} sx={{ marginRight: 1,borderRadius: 2 }} />
          <Skeleton variant="rectangular" width="20%" height={40} sx={{ marginRight: 1,borderRadius: 2 }} />
          <Skeleton variant="rectangular" width="20%" height={40} sx={{ marginRight: 1,borderRadius: 2 }} />
          <Skeleton variant="rectangular" width="20%" height={40} sx={{ marginRight: 1,borderRadius: 2 }}/>
        </Box>

        {/* Table Row Skeleton */}
        {[...Array(rows)].map((_, index) => (
          <Box key={index} display="flex" sx={{ marginBottom: 1 }}>
            <Skeleton variant="rectangular" width="20%" height={40} sx={{ marginRight: 1,borderRadius: 2 }} />
            <Skeleton variant="rectangular" width="20%" height={40} sx={{ marginRight: 1,borderRadius: 2 }} />
            <Skeleton variant="rectangular" width="20%" height={40} sx={{ marginRight: 1,borderRadius: 2 }} />
            <Skeleton variant="rectangular" width="20%" height={40} sx={{ marginRight: 1,borderRadius: 2 }} />
            <Skeleton variant="rectangular" width="20%" height={40} sx={{ marginRight: 1,borderRadius: 2 }}/>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default SkeletonLoader;
