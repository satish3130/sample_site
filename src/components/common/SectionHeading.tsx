import React from 'react';
import { Box, Typography, SxProps, Theme } from '@mui/material';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  sx?: SxProps<Theme>;
  eyebrowColor?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  sx,
  eyebrowColor = 'primary.main',
}) => {
  return (
    <Box sx={{ textAlign: align, mb: 6, ...sx }}>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{
            color: eyebrowColor,
            fontWeight: 'bold',
            letterSpacing: '0.08em',
            fontSize: '0.75rem',
            mb: 1,
            display: 'block',
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
          mb: subtitle ? 2 : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 600,
            mx: align === 'center' ? 'auto' : 0,
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeading;
