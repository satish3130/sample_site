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

const avatarColors = ['#6C63FF', '#FF6584', '#43D9A3', '#FFA726', '#29B6F6', '#AB47BC'];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, sx }) => {
  const colorIndex = testimonial.id % avatarColors.length;
  const avatarColor = avatarColors[colorIndex];

  return (
    <Card
      sx={{
        height: '100%',
        p: 0.5,
        position: 'relative',
        ...sx,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <FormatQuoteIcon
          sx={{
            fontSize: 48,
            color: 'primary.main',
            opacity: 0.15,
            position: 'absolute',
            top: 16,
            right: 16,
          }}
        />
        <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 2 }} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.8, mb: 3, fontStyle: 'italic' }}
        >
          "{testimonial.text}"
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar
            sx={{
              bgcolor: avatarColor,
              fontWeight: 700,
              fontSize: '0.85rem',
              width: 44,
              height: 44,
            }}
          >
            {testimonial.avatar}
          </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
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
