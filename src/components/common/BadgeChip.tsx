import React from 'react';
import { Chip, ChipProps } from '@mui/material';

const BadgeChip: React.FC<ChipProps> = ({ sx, color = 'primary', ...props }) => {

  
  let chipStyles = {};
  if (color === 'primary') {
    chipStyles = {
      bgcolor: 'rgba(15, 118, 110, 0.08)',
      color: 'primary.main',
      border: '1px solid rgba(15, 118, 110, 0.25)',
      '& .MuiChip-icon': {
        color: 'primary.main',
      },
    };
  } else if (color === 'secondary') {
    chipStyles = {
      bgcolor: 'rgba(180, 83, 9, 0.08)',
      color: 'secondary.main',
      border: '1px solid rgba(180, 83, 9, 0.25)',
      '& .MuiChip-icon': {
        color: 'secondary.main',
      },
    };
  } else {
    chipStyles = {
      bgcolor: 'rgba(71, 85, 105, 0.08)',
      color: 'text.secondary',
      border: '1px solid rgba(71, 85, 105, 0.2)',
      '& .MuiChip-icon': {
        color: 'text.secondary',
      },
    };
  }

  return (
    <Chip
      size="small"
      sx={{
        fontWeight: 800,
        fontSize: '0.65rem',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        borderRadius: '8px',
        px: 0.8,
        py: 1.5,
        ...chipStyles,
        ...sx,
      }}
      {...props}
    />
  );
};

export default BadgeChip;
