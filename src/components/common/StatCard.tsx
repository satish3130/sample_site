import React from 'react';
import { Paper, Typography } from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import type { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const IconComponent = (MuiIcons as any)[stat.icon] || MuiIcons.Star;

  return (
    <Paper variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
      <IconComponent color="primary" sx={{ fontSize: 40, mb: 1 }} />
      <Typography variant="h4"   sx={{ fontWeight: "bold", mb: 1 }}>
        {stat.value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {stat.label}
      </Typography>
    </Paper>
  );
};

export default StatCard;
