import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6C63FF',
      light: '#8B85FF',
      dark: '#4B44D6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6584',
      light: '#FF8FA6',
      dark: '#CC4D68',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#43D9A3',
      light: '#6DE4BE',
      dark: '#2EB888',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8F7FF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A2E',
      secondary: '#5A5A7A',
    },
    divider: 'rgba(108,99,255,0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500, letterSpacing: '0.01em' },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  shape: { borderRadius: 12 },
  shadows: [
    'none',
    '0 2px 8px rgba(108,99,255,0.08)',
    '0 4px 16px rgba(108,99,255,0.12)',
    '0 8px 24px rgba(108,99,255,0.15)',
    '0 12px 32px rgba(108,99,255,0.18)',
    '0 16px 40px rgba(108,99,255,0.20)',
    '0 20px 48px rgba(108,99,255,0.22)',
    '0 24px 56px rgba(108,99,255,0.24)',
    '0 28px 64px rgba(108,99,255,0.26)',
    '0 32px 72px rgba(108,99,255,0.28)',
    '0 36px 80px rgba(108,99,255,0.30)',
    '0 40px 88px rgba(108,99,255,0.32)',
    '0 44px 96px rgba(108,99,255,0.34)',
    '0 48px 104px rgba(108,99,255,0.36)',
    '0 52px 112px rgba(108,99,255,0.38)',
    '0 56px 120px rgba(108,99,255,0.40)',
    '0 60px 128px rgba(108,99,255,0.42)',
    '0 64px 136px rgba(108,99,255,0.44)',
    '0 68px 144px rgba(108,99,255,0.46)',
    '0 72px 152px rgba(108,99,255,0.48)',
    '0 76px 160px rgba(108,99,255,0.50)',
    '0 80px 168px rgba(108,99,255,0.52)',
    '0 84px 176px rgba(108,99,255,0.54)',
    '0 88px 184px rgba(108,99,255,0.56)',
    '0 92px 192px rgba(108,99,255,0.58)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
          fontSize: '0.95rem',
          transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
          '&:hover': { transform: 'translateY(-2px)' },
        },
        contained: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            background: 'linear-gradient(135deg, #6C63FF 0%, #8B85FF 100%)',
            boxShadow: '0 4px 20px rgba(108,99,255,0.35)',
            color: '#FFFFFF',
            '&:hover': {
              background: 'linear-gradient(135deg, #4B44D6 0%, #6C63FF 100%)',
              boxShadow: '0 8px 28px rgba(108,99,255,0.45)',
            },
          }),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(108,99,255,0.10)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(108,99,255,0.20)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 8, fontWeight: 600 },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 16px rgba(108,99,255,0.12)',
        },
      },
    },
  },
});

export default theme;
