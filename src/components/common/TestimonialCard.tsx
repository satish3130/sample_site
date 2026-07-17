import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Rating,
  SxProps,
  Theme,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  sx?: SxProps<Theme>;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, sx }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        position: 'relative',
        ...sx,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <FormatQuoteIcon
          sx={{
            fontSize: 40,
            color: 'action.disabled',
            opacity: 0.25,
            position: 'absolute',
            top: 16,
            right: 16,
          }}
        />
        <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 2 }} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, fontStyle: 'italic' }}
        >
          "{testimonial.text}"
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              width: 36,
              height: 36,
            }}
          >
            {testimonial.avatar}
          </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
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
