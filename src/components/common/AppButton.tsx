import React from 'react';
import { Button as MuiButton, ButtonProps, CircularProgress } from '@mui/material';

interface AppButtonProps extends ButtonProps {
  loading?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  children,
  loading = false,
  disabled,
  sx,
  ...props
}) => {
  return (
    <MuiButton
      disabled={disabled || loading}
      sx={sx}
      {...props}
    >
      {loading ? <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} /> : null}
      {children}
    </MuiButton>
  );
};

export default AppButton;
