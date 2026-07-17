import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import SectionHeading from '../common/SectionHeading';
import PricingCard from '../common/PricingCard';
import { pricingPlans } from '../../data';

const PricingSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Pricing Plans"
          title="Transparent Pricing for Every Stage"
          subtitle="Choose the perfect plan for your needs. Scale seamlessly as your product and team grow."
        />
        <Grid container spacing={6} sx={{ mt: { md: 2 }, alignItems: 'stretch' }}>
          {pricingPlans.map((plan) => (
            <Grid size={{ xs: 12, md: 6 }} key={plan.id}>
              <PricingCard plan={plan} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingSection;
