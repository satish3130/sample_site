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
    <Box sx={{ textAlign: align, mb: 7, ...sx }}>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{
            color: eyebrowColor,
            fontWeight: 800,
            letterSpacing: '0.12em',
            fontSize: '0.75rem',
            mb: 1.5,
            display: 'block',
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2rem', md: '2.8rem' },
          mb: subtitle ? 2.5 : 0,
          background: 'linear-gradient(135deg, #1A1A2E 0%, #6C63FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
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
            lineHeight: 1.8,
            fontSize: '1.05rem',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeading;
