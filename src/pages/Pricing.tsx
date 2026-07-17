import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import SectionHeading from '../components/common/SectionHeading';
import PricingCard from '../components/common/PricingCard';
import { pricingPlans } from '../data';
import FAQSection from '../components/sections/FAQSection';

const Pricing: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default', pt: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 12 } }}>
        <SectionHeading
          eyebrow="Pricing Plans"
          title="Simple, Flexible Plans for Everyone"
          subtitle="All plans include our responsive theme engine, reusable layout systems, and custom theme presets."
        />
        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {pricingPlans.map((plan) => (
            <Grid size={{ xs: 12, md: 4 }} key={plan.id}>
              <PricingCard plan={plan} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <FAQSection />
    </Box>
  );
};

export default Pricing;
