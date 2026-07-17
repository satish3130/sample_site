import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import FeatureCard from '../common/FeatureCard';
import { features } from '../../data';

const FeaturesSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary"   sx={{ mb: 1, display: "block" }}>
          Trending Destinations
        </Typography>
        <Typography variant="h4"   sx={{ fontWeight: "bold", mb: 1 }}>
          Explore Curated Global Getaways
        </Typography>
        <Typography variant="body1" color="text.secondary"  sx={{ mb: 4 }}>
          Discover handpicked cities, breathtaking coastlines, wildlife sanctuaries, and alpine peaks prepared by local guides.
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.id}>
              <FeatureCard feature={feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
