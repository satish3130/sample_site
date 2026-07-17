import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f766e', // Deep Teal / Emerald
      light: '#14b8a6',
      dark: '#115e59',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#b45309', // Warm Amber / Sunset Gold
      light: '#f59e0b',
      dark: '#78350f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fbfaf7', // Warm Cream / Alabaster
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a', // Deep Slate
      secondary: '#475569', // Slate Gray
    },
    divider: 'rgba(15, 118, 110, 0.08)',
    action: {
      hover: 'rgba(15, 118, 110, 0.04)',
      selected: 'rgba(15, 118, 110, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' },
    h2: { fontWeight: 800, letterSpacing: '-0.015em', color: '#0f172a' },
    h3: { fontWeight: 800, letterSpacing: '-0.01em', color: '#0f172a' },
    h4: { fontWeight: 800, letterSpacing: '-0.01em', color: '#0f172a' },
    h5: { fontWeight: 700, color: '#0f172a' },
    h6: { fontWeight: 700, color: '#0f172a' },
    subtitle1: { letterSpacing: '0.01em', color: '#475569' },
    button: { textTransform: 'none', fontWeight: 700, letterSpacing: '0.02em' },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
        }
        html {
          width: 100%;
        }
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          overflow-x: hidden;
          background-color: #fbfaf7;
          color: #0f172a;
          scroll-behavior: smooth;
          font-family: 'Inter', sans-serif;
        }
        #root {
          width: 100%;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontWeight: 700,
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            boxShadow: '0 8px 16px rgba(15, 118, 110, 0.15)',
            transform: 'translateY(-1px)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)',
            color: '#ffffff',
            '&:hover': {
              background: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
              boxShadow: '0 8px 20px rgba(15, 118, 110, 0.25)',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            background: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)',
            color: '#ffffff',
            '&:hover': {
              background: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
              boxShadow: '0 8px 20px rgba(180, 83, 9, 0.25)',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderColor: 'rgba(15, 118, 110, 0.3)',
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
              borderColor: '#0f766e',
              backgroundColor: 'rgba(15, 118, 110, 0.04)',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            borderColor: 'rgba(180, 83, 9, 0.3)',
            borderWidth: '1.5px',
            color: '#b45309',
            '&:hover': {
              borderWidth: '1.5px',
              borderColor: '#b45309',
              backgroundColor: 'rgba(180, 83, 9, 0.04)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(15, 118, 110, 0.05)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 35px rgba(15, 118, 110, 0.08)',
            borderColor: 'rgba(180, 83, 9, 0.2)', // transitions to gold border hover tint
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        },
      },
    },
  },
});

export default theme;
