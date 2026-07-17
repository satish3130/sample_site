import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link, useLocation } from 'react-router-dom';
import AppButton from '../common/AppButton';
import { navLinks } from '../../data';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(108,99,255,0.1)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(108,99,255,0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                flexGrow: { xs: 1, md: 0 },
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #6C63FF, #FF6584)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(108,99,255,0.35)',
                }}
              >
                <AutoAwesomeIcon sx={{ color: '#fff', fontSize: 18 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #6C63FF, #FF6584)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AP Tech
              </Typography>
            </Box>

            {/* Desktop Nav */}
            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  mx: 'auto',
                }}
              >
                {navLinks.map((link) => (
                  <Box
                    key={link.href}
                    component={Link}
                    to={link.href}
                    sx={{
                      textDecoration: 'none',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      fontSize: '0.9rem',
                      fontWeight: isActive(link.href) ? 700 : 500,
                      color: isActive(link.href) ? 'primary.main' : 'text.primary',
                      backgroundColor: isActive(link.href) ? 'rgba(108,99,255,0.08)' : 'transparent',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(108,99,255,0.06)',
                      },
                    }}
                  >
                    {link.label}
                  </Box>
                ))}
              </Box>
            )}

            {/* CTA */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1.5, ml: 2 }}>
                <AppButton variant="text" size="small" sx={{ color: 'text.primary' }}>
                  Sign In
                </AppButton>
                <AppButton variant="contained" size="small" color="primary">
                  Get Started
                </AppButton>
              </Box>
            )}

            {/* Mobile Hamburger */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              p: 2,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
            Menu
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={Link}
                to={link.href}
                onClick={() => setDrawerOpen(false)}
                selected={isActive(link.href)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(108,99,255,0.1)',
                    color: 'primary.main',
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{ primary: { sx: { fontWeight: isActive(link.href) ? 700 : 500 } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <AppButton variant="outlined" color="primary" fullWidth>
            Sign In
          </AppButton>
          <AppButton variant="contained" color="primary" fullWidth>
            Get Started Free
          </AppButton>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ mb: 1 }} />
    </>
  );
};

export default Navbar;
