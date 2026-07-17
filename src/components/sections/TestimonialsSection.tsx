import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import TestimonialCard from '../common/TestimonialCard';
import { testimonials } from '../../data';

const TestimonialsSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary"   sx={{ mb: 1, display: "block" }}>
          Traveler Experiences
        </Typography>
        <Typography variant="h4"   sx={{ fontWeight: "bold", mb: 1 }}>
          Stories From the Road
        </Typography>
        <Typography variant="body1" color="text.secondary"  sx={{ mb: 4 }}>
          Read authentic reviews from explorers who designed their bucket-list getaways with Roamify.
        </Typography>
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
