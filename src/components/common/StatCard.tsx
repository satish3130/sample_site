import React from 'react';
import { Typography, SxProps, Theme, Paper } from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import type { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
  sx?: SxProps<Theme>;
}

const StatCard: React.FC<StatCardProps> = ({ stat, sx }) => {
  const IconComponent = (MuiIcons as any)[stat.icon] || MuiIcons.Star;

  return (
    <Paper
      elevation={0}
      sx={{
        textAlign: 'center',
        p: 3.5,
        borderRadius: 4,
        bgcolor: 'background.paper',
        border: `1px solid rgba(15, 118, 110, 0.08)`,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 30px rgba(15, 118, 110, 0.1)',
          borderColor: 'secondary.main',
        },
        ...sx,
      }}
    >
      <IconComponent color="primary" sx={{ fontSize: 36, mb: 1.5 }} />
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontWeight: 800,
          lineHeight: 1,
          mb: 1,
          color: 'text.primary',
        }}
      >
        {stat.value}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
        {stat.label}
      </Typography>
    </Paper>
  );
};

export default StatCard;
