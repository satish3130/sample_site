import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Avatar,
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchIcon from '@mui/icons-material/Search';
import AppButton from '../common/AppButton';
import BadgeChip from '../common/BadgeChip';

const HeroSection: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [month, setMonth] = useState('');
  const [guests, setGuests] = useState('2');
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = () => {
    setSearchOpen(true);
  };

  const handleClose = () => {
    setSearchOpen(false);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        minHeight: '85vh',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(15, 118, 110, 0.05) 0%, rgba(180, 83, 9, 0.02) 70%, transparent 100%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Eyebrow badge */}
            <BadgeChip
              label="Curated Luxury Travel Escapes"
              color="primary"
              sx={{ mb: 3 }}
            />

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 900,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.8rem' },
                lineHeight: 1.15,
              }}
            >
              Discover The World
              <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #0f766e 0%, #b45309 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                In Absolute Style
              </Box>
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem', maxWidth: 500 }}
            >
              Roamify designs handcrafted itineraries for discerning travelers. Explore turquoise Mediterranean waters, hike majestic Swiss peaks, or experience traditional Kyoto culture with dedicated local guides.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
              <AppButton
                variant="contained"
                size="large"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                onClick={handleSearch}
              >
                Plan Your Voyage
              </AppButton>
              <AppButton
                variant="outlined"
                size="large"
                color="secondary"
                startIcon={<PlayCircleIcon />}
              >
                Watch Experience film
              </AppButton>
            </Stack>

            {/* Social proof */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex' }}>
                {['AR', 'VM', 'NS', 'DC'].map((letter, i) => (
                  <Avatar
                    key={i}
                    sx={{
                      width: 36,
                      height: 36,
                      background: i % 2 === 0 
                        ? 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)' 
                        : 'linear-gradient(135deg, #b45309 0%, #78350f 100%)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      border: '2px solid #fbfaf7',
                      ml: i > 0 ? -1.5 : 0,
                      zIndex: 5 - i,
                      fontWeight: 'bold',
                    }}
                  >
                    {letter}
                  </Avatar>
                ))}
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                  15,000+ Happy Travelers
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  trusted us for their bucket-list holidays (Rated 4.9★)
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Hero booking widget & trending destinations side-panel */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                bgcolor: '#ffffff',
                borderRadius: 4,
                p: 4,
                border: '1px solid rgba(15, 118, 110, 0.08)',
                boxShadow: '0 20px 45px rgba(15, 118, 110, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.01em', mb: -1 }}>
                Quick Trip Planner
              </Typography>

              {/* Destination selector */}
              <FormControl fullWidth size="medium">
                <InputLabel id="dest-select-label">Where would you like to go?</InputLabel>
                <Select
                  labelId="dest-select-label"
                  id="dest-select"
                  value={destination}
                  label="Where would you like to go?"
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <MenuItem value="Amalfi Coast">Amalfi Coast, Italy</MenuItem>
                  <MenuItem value="Swiss Alps">Swiss Alps, Switzerland</MenuItem>
                  <MenuItem value="Kyoto">Kyoto, Japan</MenuItem>
                  <MenuItem value="Serengeti Safari">Serengeti Safari, Tanzania</MenuItem>
                  <MenuItem value="Santorini">Santorini, Greece</MenuItem>
                  <MenuItem value="Queenstown">Queenstown, New Zealand</MenuItem>
                </Select>
              </FormControl>

              {/* Date Input & Guest quantity row */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth size="medium">
                    <InputLabel id="month-select-label">When?</InputLabel>
                    <Select
                      labelId="month-select-label"
                      id="month-select"
                      value={month}
                      label="When?"
                      onChange={(e) => setMonth(e.target.value)}
                    >
                      <MenuItem value="August 2026">August 2026</MenuItem>
                      <MenuItem value="October 2026">October 2026</MenuItem>
                      <MenuItem value="December 2026">December 2026</MenuItem>
                      <MenuItem value="April 2027">April 2027</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth size="medium">
                    <InputLabel id="guests-select-label">Guests</InputLabel>
                    <Select
                      labelId="guests-select-label"
                      id="guests-select"
                      value={guests}
                      label="Guests"
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      <MenuItem value="1">1 Guest</MenuItem>
                      <MenuItem value="2">2 Guests</MenuItem>
                      <MenuItem value="3">3 Guests</MenuItem>
                      <MenuItem value="4+">4+ Guests</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <AppButton
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                startIcon={<SearchIcon />}
                onClick={handleSearch}
                disabled={!destination}
              >
                Search Destinations
              </AppButton>

              {/* Trending destinations quick tags */}
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold', display: 'block', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Popular Searches
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['Amalfi', 'Swiss Alps', 'Kyoto', 'Safari'].map((tag) => (
                    <Box
                      key={tag}
                      component="span"
                      onClick={() => {
                        const fullName = tag === 'Amalfi' ? 'Amalfi Coast' : tag === 'Safari' ? 'Serengeti Safari' : tag;
                        setDestination(fullName);
                      }}
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 650,
                        bgcolor: 'background.default',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.5,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                          bgcolor: 'rgba(15, 118, 110, 0.06)',
                          borderColor: 'primary.main',
                          color: 'primary.main',
                        }
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Booking Search Dialog simulation */}
      <Dialog
        open={searchOpen}
        onClose={handleClose}
        slotProps={{ paper: { sx: { borderRadius: 4, p: 2, maxWidth: 450 } } }}
      >
        <DialogTitle sx={{ fontWeight: 800 }}>
          🎒 Perfect Match Found!
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Great news! We found **3 premium itineraries** for your custom trip to **{destination}** in **{month || 'your chosen month'}** with **{guests} guests**.
          </DialogContentText>
          <Box sx={{ bgcolor: 'rgba(15, 118, 110, 0.05)', p: 2, borderRadius: 2.5, mb: 1, border: '1px solid rgba(15, 118, 110, 0.1)' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 750, color: 'primary.main', mb: 0.5 }}>
              Recommended Itinerary:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              {destination === 'Kyoto' ? 'Kyoto & Tokyo Heritage Fusion' : destination === 'Serengeti Safari' ? 'Serengeti Wilderness Expedition' : `Grand Escape to ${destination}`}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Includes 5★ accommodation, private tour director, and local meals.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <AppButton onClick={handleClose} variant="text" color="primary">
            Cancel
          </AppButton>
          <AppButton onClick={handleClose} variant="contained" color="secondary">
            View Details
          </AppButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HeroSection;
