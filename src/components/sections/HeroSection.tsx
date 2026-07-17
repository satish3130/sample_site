import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Stack,
  Avatar,
  Chip,
  Alert,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const HeroSection: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [month, setMonth] = useState('');
  const [guests, setGuests] = useState('2');
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (destination) setSearched(true);
  };

  return (
    <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          {/* Left: text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip label="Luxury Travel Escapes" color="primary" size="small" sx={{ mb: 2 }} />

            <Typography variant="h3"    sx={{ fontWeight: "bold", mb: 1 }}>
              Discover The World In Style
            </Typography>

            <Typography variant="h6" color="text.secondary"  sx={{ mb: 2 }}>
              Roamify designs handcrafted itineraries for discerning travelers. From the Amalfi Coast to the Serengeti, explore in comfort with dedicated local guides.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 3, mb: 4 }}>
              <Button variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                Explore Destinations
              </Button>
              <Button variant="outlined" size="large">
                View Packages
              </Button>
            </Stack>

            <Divider sx={{ mb: 3 }} />

            {/* Social proof */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex' }}>
                {['AR', 'VM', 'NS', 'DC'].map((initials, i) => (
                  <Avatar
                    key={i}
                    sx={{ width: 32, height: 32, fontSize: '0.7rem', ml: i > 0 ? -1 : 0, zIndex: 4 - i, border: '2px solid white' }}
                  >
                    {initials}
                  </Avatar>
                ))}
              </Box>
              <Box>
                <Typography variant="body2"  sx={{ fontWeight: "bold" }}>15,000+ Happy Travelers</Typography>
                <Typography variant="caption" color="text.secondary">Rated 4.9★ on Google Reviews</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right: search widget */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h6"   sx={{ fontWeight: "bold", mb: 1 }}>
                Quick Trip Planner
              </Typography>

              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel>Where would you like to go?</InputLabel>
                  <Select
                    value={destination}
                    label="Where would you like to go?"
                    onChange={(e) => { setDestination(e.target.value); setSearched(false); }}
                  >
                    <MenuItem value="Amalfi Coast">Amalfi Coast, Italy</MenuItem>
                    <MenuItem value="Swiss Alps">Swiss Alps, Switzerland</MenuItem>
                    <MenuItem value="Kyoto">Kyoto, Japan</MenuItem>
                    <MenuItem value="Serengeti">Serengeti Safari, Tanzania</MenuItem>
                    <MenuItem value="Santorini">Santorini, Greece</MenuItem>
                    <MenuItem value="Queenstown">Queenstown, New Zealand</MenuItem>
                  </Select>
                </FormControl>

                <Grid container spacing={2}>
                  <Grid size={6}>
                    <FormControl fullWidth>
                      <InputLabel>When?</InputLabel>
                      <Select value={month} label="When?" onChange={(e) => setMonth(e.target.value)}>
                        <MenuItem value="August 2026">August 2026</MenuItem>
                        <MenuItem value="October 2026">October 2026</MenuItem>
                        <MenuItem value="December 2026">December 2026</MenuItem>
                        <MenuItem value="April 2027">April 2027</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid size={6}>
                    <FormControl fullWidth>
                      <InputLabel>Guests</InputLabel>
                      <Select value={guests} label="Guests" onChange={(e) => setGuests(e.target.value)}>
                        <MenuItem value="1">1 Guest</MenuItem>
                        <MenuItem value="2">2 Guests</MenuItem>
                        <MenuItem value="3">3 Guests</MenuItem>
                        <MenuItem value="4+">4+ Guests</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  size="large"
                  startIcon={<SearchIcon />}
                  onClick={handleSearch}
                  disabled={!destination}
                >
                  Search Destinations
                </Button>

                {searched && (
                  <Alert severity="success" icon={<CheckCircleIcon />}>
                    Found 3 itineraries for <strong>{destination}</strong> in {month || 'your chosen month'} for {guests} guest(s)!
                  </Alert>
                )}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
