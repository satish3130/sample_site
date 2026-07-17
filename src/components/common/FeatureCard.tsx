import React from 'react';
import { Card, CardContent, Box, Typography, SxProps, Theme } from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import type { Feature } from '../../types';

interface FeatureCardProps {
  feature: Feature;
  sx?: SxProps<Theme>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, sx }) => {
  const IconComponent = (MuiIcons as any)[feature.icon] || MuiIcons.Star;

  return (
    <Card
      sx={{
        height: '100%',
        p: 0.5,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: feature.color,
          borderRadius: '16px 16px 0 0',
        },
        ...sx,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 3,
            backgroundColor: `${feature.color}18`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2.5,
          }}
        >
          <IconComponent sx={{ color: feature.color, fontSize: 28 }} />
        </Box>
        <Typography variant="h6" sx={{ mb: 1.5, color: 'text.primary' }}>
          {feature.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
          {feature.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
