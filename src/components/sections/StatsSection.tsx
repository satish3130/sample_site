import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import StatCard from '../common/StatCard';
import { stats } from '../../data';

const StatsSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
