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
          eyebrow="Testimonials"
          title="Loved by Developers & Product Teams"
          subtitle="See what our community has to say about their experience using AP Tech components to build their web applications."
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
