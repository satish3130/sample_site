import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  TextField,
  Button,
  Stack,
  Tooltip,
  Chip,
} from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const footerLinks: Record<string, string[]> = {
  Destinations: ['Amalfi Coast', 'Swiss Alps', 'Kyoto Japan', 'Serengeti Safari', 'Santorini'],
  Company: ['Our Story', 'Meet the Guides', 'Travel Blog', 'Careers', 'Press Room'],
  Support: ['Help Center', 'Visa Assistance', 'Travel Insurance', 'Cancellation Policy', 'Contact Us'],
};

const socialIcons = [
  { icon: <TwitterIcon />, label: 'Twitter' },
  { icon: <InstagramIcon />, label: 'Instagram' },
  { icon: <LinkedInIcon />, label: 'LinkedIn' },
  { icon: <YouTubeIcon />, label: 'YouTube' },
];

const contactItems = [
  { icon: <PhoneIcon sx={{ fontSize: 16 }} />, text: '+1 (800) ROAM-HELP' },
  { icon: <EmailIcon sx={{ fontSize: 16 }} />, text: 'curator@roamify.travel' },
  { icon: <LocationOnIcon sx={{ fontSize: 16 }} />, text: 'Mumbai · London · Nairobi' },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0f172a',
        color: 'rgba(255,255,255,0.75)',
        pt: 8,
        pb: 0,
      }}
    >
      <Container maxWidth="lg">
        {/* Top row */}
        <Grid container spacing={6}>

          {/* Brand + Contact */}
          <Grid size={{ xs: 12, md: 4 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <TravelExploreIcon sx={{ color: '#fff', fontSize: 22 }} />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                }}
              >
                Roamify
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{ lineHeight: 1.8, mb: 3.5, color: 'rgba(255,255,255,0.55)', maxWidth: 300 }}
            >
              Crafting handpicked luxury travel itineraries for discerning explorers. Trusted by 15,000+ travelers across 50+ world-class destinations.
            </Typography>

            {/* Contact */}
            <Stack spacing={1.5} sx={{ mb: 4 }}>
              {contactItems.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      color: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialIcons.map((s) => (
                <Tooltip key={s.label} title={s.label} placement="top">
                  <IconButton
                    size="small"
                    href="#"
                    sx={{
                      color: 'rgba(255,255,255,0.55)',
                      bgcolor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 2,
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: '#fff',
                        borderColor: 'primary.main',
                      },
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {s.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </Grid>

          {/* Nav Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={section}>
              <Typography
                variant="overline"
                sx={{
                  color: '#fff',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  fontSize: '0.65rem',
                  display: 'block',
                  mb: 2.5,
                }}
              >
                {section}
              </Typography>
              <Stack spacing={1.5}>
                {links.map((link) => (
                  <Typography
                    key={link}
                    component="a"
                    href="#"
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      fontWeight: 400,
                      fontSize: '0.85rem',
                      transition: 'color 0.2s',
                      '&:hover': { color: 'primary.light' },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* Newsletter */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography
              variant="overline"
              sx={{
                color: '#fff',
                fontWeight: 800,
                letterSpacing: '0.1em',
                fontSize: '0.65rem',
                display: 'block',
                mb: 2.5,
              }}
            >
              Newsletter
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, display: 'block', mb: 2 }}>
              Get destination guides and exclusive travel deals delivered weekly.
            </Typography>

            {subscribed ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: 'primary.light', fontSize: 18 }} />
                <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 700 }}>
                  You're subscribed!
                </Typography>
              </Box>
            ) : (
              <Box>
                <TextField
                  placeholder="your@email.com"
                  size="small"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                  sx={{
                    mb: 1.5,
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      fontSize: '0.8rem',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.35)' },
                      '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'rgba(255,255,255,0.3)',
                      opacity: 1,
                    },
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="small"
                  endIcon={<SendIcon sx={{ fontSize: '14px !important' }} />}
                  onClick={handleSubscribe}
                  sx={{ fontWeight: 700, py: 1 }}
                >
                  Subscribe
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            pb: 4,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Roamify Luxury Travel, Ltd. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <Typography
                key={item}
                component="a"
                href="#"
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none',
                  '&:hover': { color: 'rgba(255,255,255,0.7)' },
                  transition: 'color 0.2s',
                }}
              >
                {item}
              </Typography>
            ))}
            <Chip
              label="🌿 Carbon Neutral Travel"
              size="small"
              sx={{
                bgcolor: 'rgba(15,118,110,0.25)',
                color: 'primary.light',
                fontSize: '0.65rem',
                fontWeight: 700,
                height: 22,
                border: '1px solid rgba(20,184,166,0.3)',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
