import React, { useState, useMemo } from 'react';
import { Box, Container, Grid, TextField, InputAdornment, Chip, Typography, Zoom } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SectionHeading from '../components/common/SectionHeading';
import FeatureCard from '../components/common/FeatureCard';
import { features } from '../data';

const Features: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Coastal Luxury', 'Adventure', 'Cultural Heritage', 'Wildlife'];

  const filteredDestinations = useMemo(() => {
    return features.filter((dest) => {
      const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.default', minHeight: '85vh' }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Luxury Destinations"
          title="Curated Travel Catalogue"
          subtitle="Browse our handpicked global escapes, filtered by category or keywords, to find your next unforgettable journey."
        />

        {/* Search and Filters Panel */}
        <Box 
          sx={{ 
            mb: 6, 
            p: 3.5, 
            borderRadius: 4, 
            bgcolor: 'background.paper', 
            border: '1px solid rgba(15, 118, 110, 0.08)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)'
          }}
        >
          <Grid container spacing={3} sx={{ alignItems: 'center' }}>
            {/* Search Input */}
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search destinations, activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="primary" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>

            {/* Category Tags */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                {categories.map((cat) => {
                  const active = selectedCategory === cat;
                  return (
                    <Chip
                      key={cat}
                      label={cat}
                      onClick={() => setSelectedCategory(cat)}
                      color={active ? 'primary' : 'default'}
                      variant={active ? 'filled' : 'outlined'}
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        px: 1,
                        py: 2,
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        borderWidth: active ? 0 : '1.5px',
                        borderColor: 'rgba(15, 118, 110, 0.25)',
                        '&:hover': {
                          bgcolor: active ? 'primary.dark' : 'rgba(15, 118, 110, 0.06)',
                          borderColor: 'primary.main',
                        }
                      }}
                    />
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Grid List */}
        {filteredDestinations.length > 0 ? (
          <Grid container spacing={4}>
            {filteredDestinations.map((dest) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dest.id}>
                <Box sx={{ height: '100%', transitionDelay: '50ms' }}>
                  <Zoom in>
                    <Box sx={{ height: '100%' }}>
                      <FeatureCard feature={dest} />
                    </Box>
                  </Zoom>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ py: 10, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold', mb: 1 }}>
              No Destinations Found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search terms or choosing another category filter.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Features;
