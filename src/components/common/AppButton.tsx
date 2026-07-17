import React from 'react';
import { Button as MuiButton, ButtonProps, CircularProgress } from '@mui/material';

interface AppButtonProps extends ButtonProps {
  loading?: boolean;
  gradient?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  children,
  loading = false,
  gradient = false,
  disabled,
  sx,
  ...props
}) => {
  return (
    <MuiButton
      disabled={disabled || loading}
      sx={{
        ...(gradient && {
          background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(135deg, #4B44D6 0%, #CC4D68 100%)',
            transform: 'translateY(-2px)',
          },
        }),
        ...sx,
      }}
      {...props}
    >
      {loading ? <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} /> : null}
      {children}
    </MuiButton>
  );
};

export default AppButton;
