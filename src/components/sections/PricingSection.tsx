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
          eyebrow="Signature Packages"
          title="Handcrafted Luxury Tours"
          subtitle="Choose from our most requested travel itineraries, inclusive of five-star stays, activities, and expert local guides."
        />
        <Grid container spacing={4} sx={{ mt: { md: 2 }, alignItems: 'stretch' }}>
          {pricingPlans.map((plan) => (
            <Grid size={{ xs: 12, md: 4 }} key={plan.id}>
              <PricingCard plan={plan} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingSection;
