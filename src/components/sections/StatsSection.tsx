import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import StatCard from '../common/StatCard';
import { stats } from '../../data';

const StatsSection: React.FC = () => {
  return (
    <Box sx={{ py: 6, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {stats.map((stat, idx) => (
            <Grid size={{ xs: 6, md: 3 }} key={idx}>
              <StatCard stat={stat} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
