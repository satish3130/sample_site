import React from 'react';
import { Card, CardContent, CardMedia, Box, Typography, SxProps, Theme, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import BadgeChip from './BadgeChip';
import type { Feature } from '../../types';

interface FeatureCardProps {
  feature: Feature;
  sx?: SxProps<Theme>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, sx }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 35px rgba(15, 118, 110, 0.1)',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.06)',
          },
          '& .destination-title': {
            color: 'primary.main',
          }
        },
        ...sx,
      }}
    >
      {/* Destination Image Section */}
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 220 }}>
        <CardMedia
          component="img"
          image={feature.image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80'}
          alt={feature.title}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        {/* Category Overlay */}
        {feature.category && (
          <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
            <BadgeChip
              label={feature.category}
              color="secondary"
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(4px)',
                color: 'secondary.dark',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                fontWeight: 700,
              }}
            />
          </Box>
        )}
      </Box>

      {/* Destination Details */}
      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
          <Typography
            variant="h6"
            component="h3"
            className="destination-title"
            sx={{
              fontWeight: 800,
              fontSize: '1.2rem',
              transition: 'color 0.3s ease',
              lineHeight: 1.3,
            }}
          >
            {feature.title}
          </Typography>
          
          {/* Rating */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <StarIcon sx={{ color: '#f59e0b', fontSize: 18 }} />
            <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
              {feature.rating}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.6,
            mb: 3,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flexGrow: 1,
          }}
        >
          {feature.description}
        </Typography>

        <Divider sx={{ mb: 2, borderColor: 'rgba(15, 118, 110, 0.06)' }} />

        {/* Footer info: Duration and Starting Price */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
            <AccessTimeIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              {feature.duration || 'Flexible'}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Starting From
            </Typography>
            <Typography variant="body1" color="primary.main" sx={{ fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.1 }}>
              {feature.price}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
