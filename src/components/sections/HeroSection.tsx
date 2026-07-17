import { Box, Container, Typography, Grid, Stack, Avatar } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AppButton from '../common/AppButton';
import BadgeChip from '../common/BadgeChip';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #F8F7FF 0%, #EEF2FF 50%, #F8F7FF 100%)',
      }}
    >
      {/* Animated background blobs */}
      {[
        { size: 500, top: '-15%', left: '-10%', color: 'rgba(108,99,255,0.12)', delay: '0s' },
        { size: 400, top: '40%', right: '-8%', color: 'rgba(255,101,132,0.10)', delay: '2s' },
        { size: 300, bottom: '-10%', left: '30%', color: 'rgba(67,217,163,0.10)', delay: '4s' },
      ].map((blob, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: blob.size,
            height: blob.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
            animation: `pulse 8s ease-in-out infinite ${blob.delay}`,
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 1 },
              '50%': { transform: 'scale(1.15)', opacity: 0.7 },
            },
            pointerEvents: 'none',
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Eyebrow badge */}
            <BadgeChip
              label="🚀 Now with AI-powered features"
              colorHex="#6C63FF"
              sx={{ mb: 4, px: 2, py: 0.5, borderRadius: 3 }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.6rem', sm: '3.2rem', md: '4rem' },
                mb: 3,
                lineHeight: 1.08,
                background: 'linear-gradient(135deg, #1A1A2E 30%, #6C63FF 70%, #FF6584 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Build Beautiful
              <br />
              Products{' '}
              <Box component="span" sx={{ fontStyle: 'italic' }}>
                Faster
              </Box>
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, lineHeight: 1.85, fontSize: '1.1rem', maxWidth: 480 }}
            >
              A complete design system built with Material UI. Reusable components, consistent
              theming, and stunning aesthetics — ship production-ready UIs in record time.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
              <AppButton
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
              >
                Start Building Free
              </AppButton>
              <AppButton
                variant="outlined"
                size="large"
                startIcon={<PlayCircleIcon />}
                sx={{ px: 4, py: 1.5, fontSize: '1rem', borderColor: 'rgba(108,99,255,0.4)' }}
              >
                Watch Demo
              </AppButton>
            </Stack>

            {/* Social proof */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex' }}>
                {['#6C63FF', '#FF6584', '#43D9A3', '#FFA726', '#29B6F6'].map((color, i) => (
                  <Avatar
                    key={i}
                    sx={{
                      width: 34,
                      height: 34,
                      bgcolor: color,
                      fontSize: '0.7rem',
                      border: '2px solid #fff',
                      ml: i > 0 ? -1.2 : 0,
                      zIndex: 5 - i,
                      fontWeight: 700,
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </Avatar>
                ))}
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                  50,000+ developers
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  already building with AP Tech
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Hero visual */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                '&:hover .hero-card': { transform: 'translateY(-8px)' },
              }}
            >
              {/* Main card */}
              <Box
                className="hero-card"
                sx={{
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  p: 4,
                  boxShadow: '0 32px 80px rgba(108,99,255,0.18)',
                  border: '1px solid rgba(108,99,255,0.12)',
                  transition: 'transform 0.4s ease',
                }}
              >
                <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Component Library
                  </Typography>
                  <BadgeChip label="v2.0.0" colorHex="#43D9A3" />
                </Box>

                {/* Mock component showcases */}
                <Stack spacing={2}>
                  {[
                    { label: 'AppButton', color: '#6C63FF', width: '75%' },
                    { label: 'FeatureCard', color: '#FF6584', width: '90%' },
                    { label: 'SectionHeading', color: '#43D9A3', width: '60%' },
                    { label: 'TestimonialCard', color: '#FFA726', width: '80%' },
                    { label: 'PricingCard', color: '#29B6F6', width: '70%' },
                  ].map((item) => (
                    <Box
                      key={item.label}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 1.5,
                        borderRadius: 2,
                        background: `${item.color}08`,
                        border: `1px solid ${item.color}20`,
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          bgcolor: item.color,
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary', flex: 1 }}>
                        {item.label}
                      </Typography>
                      <Box
                        sx={{
                          height: 6,
                          width: item.width,
                          borderRadius: 1,
                          background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}50 100%)`,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Floating mini cards */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  background: 'linear-gradient(135deg, #6C63FF, #FF6584)',
                  borderRadius: 3,
                  p: 2,
                  color: '#fff',
                  boxShadow: '0 8px 24px rgba(108,99,255,0.4)',
                  animation: 'float 4s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                  },
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 700, display: 'block' }}>
                  ✨ 40+ Components
                </Typography>
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: -16,
                  left: -16,
                  background: '#fff',
                  borderRadius: 3,
                  p: 2,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(108,99,255,0.12)',
                  animation: 'float 4s ease-in-out infinite 2s',
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#43D9A3', display: 'block' }}>
                  ⚡ Zero Config
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
