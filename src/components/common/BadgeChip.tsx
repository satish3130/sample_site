import React from 'react';
import { Chip, ChipProps } from '@mui/material';

interface BadgeChipProps extends ChipProps {
  colorHex?: string;
}

const BadgeChip: React.FC<BadgeChipProps> = ({ colorHex, sx, ...props }) => {
  return (
    <Chip
      size="small"
      sx={{
        ...(colorHex && {
          backgroundColor: `${colorHex}20`,
          color: colorHex,
          border: `1px solid ${colorHex}40`,
          fontWeight: 700,
          fontSize: '0.7rem',
          letterSpacing: '0.04em',
        }),
        ...sx,
      }}
      {...props}
    />
  );
};

export default BadgeChip;
