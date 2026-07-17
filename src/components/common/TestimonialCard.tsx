import React from 'react';
import { Card, CardContent, Typography, Box, Rating, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <FormatQuoteIcon color="primary" sx={{ mb: 1 }} />
        <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 1.5 }} />
        <Typography variant="body2" color="text.secondary"  sx={{ mb: 2 }}>
          "{testimonial.text}"
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main', fontSize: '0.8rem' }}>
            {testimonial.avatar}
          </Avatar>
          <Box>
            <Typography variant="subtitle2"  sx={{ fontWeight: "bold" }}>
              {testimonial.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {testimonial.role} · {testimonial.company}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
