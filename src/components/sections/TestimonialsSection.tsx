import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import SectionHeading from '../common/SectionHeading';
import TestimonialCard from '../common/TestimonialCard';
import { testimonials } from '../../data';

const TestimonialsSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Traveler Experiences"
          title="Stories From the Road"
          subtitle="Read authentic reviews and reflections from explorers who designed their bucket-list getaways with Roamify."
        />
        <Grid container spacing={3}>
          {testimonials.map((testimonial) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
