import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Link,
  IconButton,
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const footerLinks: Record<string, string[]> = {
  Destinations: ['Amalfi Coast', 'Swiss Alps', 'Kyoto', 'Serengeti', 'Santorini'],
  Company: ['About Us', 'Travel Blog', 'Careers', 'Press', 'Contact'],
  Support: ['Help Center', 'Visa Info', 'Insurance', 'Cancellations'],
};

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <FlightTakeoffIcon />
              <Typography variant="h6"  sx={{ fontWeight: "bold" }}>
                Roamify
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.85 }}>
              Curating bespoke luxury travel itineraries for discerning explorers worldwide.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" size="small" href="#" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" size="small" href="#" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" size="small" href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" size="small" href="#" aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={section}>
              <Typography variant="subtitle2"   sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: "bold", mb: 1 }}>
                {section}
              </Typography>
              {links.map((link) => (
                <Box key={link} sx={{ mb: 0.75 }}>
                  <Link href="#" color="inherit" underline="hover" variant="body2" sx={{ opacity: 0.8 }}>
                    {link}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}

          {/* Contact */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle2"   sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: "bold", mb: 1 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
              curator@roamify.travel
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
              +1 (800) ROAM-HELP
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Mumbai · London · Nairobi
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.3)' }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            © 2026 Roamify Luxury Travel, Ltd. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <Link key={item} href="#" color="inherit" underline="hover" variant="caption" sx={{ opacity: 0.7 }}>
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
