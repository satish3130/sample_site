import React from 'react';
import { Box, Typography, SxProps, Theme } from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import type { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
  sx?: SxProps<Theme>;
}

const StatCard: React.FC<StatCardProps> = ({ stat, sx }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (MuiIcons as any)[stat.icon] || MuiIcons.Star;

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 3,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.12)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.2)',
        transition: 'transform 0.25s ease',
        '&:hover': { transform: 'translateY(-4px)' },
        ...sx,
      }}
    >
      <IconComponent sx={{ fontSize: 36, color: 'rgba(255,255,255,0.85)', mb: 1.5 }} />
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          color: '#fff',
          lineHeight: 1,
          mb: 0.75,
          fontSize: { xs: '2rem', md: '2.5rem' },
        }}
      >
        {stat.value}
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
        {stat.label}
      </Typography>
    </Box>
  );
};

export default StatCard;
