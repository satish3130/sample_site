import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import SectionHeading from '../common/SectionHeading';
import FeatureCard from '../common/FeatureCard';
import { features } from '../../data';

const FeaturesSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Trending Destinations"
          title="Explore Curated Global Getaways"
          subtitle="Discover handpicked cities, breathtaking coastlines, wildlife sanctuaries, and active alpine peaks prepared by our local guides."
        />
        <Grid container spacing={4}>
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
