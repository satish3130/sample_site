import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Community', 'Status', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #0F0E1A 0%, #1A1A2E 100%)',
        color: 'rgba(255,255,255,0.85)',
        pt: 8,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blobs */}
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
          top: -100,
          left: -100,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #6C63FF, #FF6584)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AutoAwesomeIcon sx={{ color: '#fff', fontSize: 18 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff' }}>
                AP Tech
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, mb: 3, maxWidth: 280 }}>
              Building the future of digital experiences, one component at a time. Trusted by 50,000+ teams globally.
            </Typography>

            {/* Newsletter */}
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', mb: 1, display: 'block', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Stay in the loop
            </Typography>
            <TextField
              placeholder="Enter your email"
              size="small"
              fullWidth
              sx={{
                maxWidth: 300,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                  '&:hover fieldset': { borderColor: 'rgba(108,99,255,0.5)' },
                  input: { color: '#fff', fontSize: '0.85rem' },
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small" sx={{ color: 'primary.main' }}>
                        <SendIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
              {[
                { icon: <TwitterIcon fontSize="small" />, color: '#1DA1F2' },
                { icon: <LinkedInIcon fontSize="small" />, color: '#0A66C2' },
                { icon: <GitHubIcon fontSize="small" />, color: '#fff' },
                { icon: <YouTubeIcon fontSize="small" />, color: '#FF0000' },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  size="small"
                  href="#"
                  sx={{
                    color: 'rgba(255,255,255,0.4)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 1.5,
                    '&:hover': { color: social.color, borderColor: social.color, background: `${social.color}15` },
                    transition: 'all 0.2s',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <Grid size={{ xs: 6, sm: 3, md: 2 }} key={section}>
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  mb: 2.5,
                }}
              >
                {section}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {links.map((link) => (
                  <Typography
                    key={link}
                    component="a"
                    href="#"
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#fff' },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.08)' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2026 AP Tech, Inc. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Privacy', 'Terms', 'Sitemap'].map((item) => (
              <Typography
                key={item}
                component="a"
                href="#"
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none',
                  '&:hover': { color: 'rgba(255,255,255,0.7)' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
