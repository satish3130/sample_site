import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import SectionHeading from '../components/common/SectionHeading';
import FeatureCard from '../components/common/FeatureCard';
import { features } from '../data';

const Features: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Capabilities"
          title="Designed for Modern Application Development"
          subtitle="Explore all the powerful features engineered specifically to speed up your design-to-development workflow."
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

export default Features;
