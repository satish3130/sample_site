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
          eyebrow="Why AP Tech"
          title="Everything You Need to Ship Fast"
          subtitle="A thoughtfully designed toolkit of reusable components and patterns that grows with your product. Stop reinventing the wheel."
        />
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
