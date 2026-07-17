import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SectionHeading from '../components/common/SectionHeading';
import TeamCard from '../components/common/TeamCard';
import { team } from '../data';

const About: React.FC = () => {

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Mission statement */}
        <Grid container spacing={6} sx={{ mb: 12, alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{ 
                color: 'secondary.main', 
                fontWeight: 900, 
                letterSpacing: '0.15em', 
                display: 'block', 
                mb: 2 
              }}
            >
              Our Vision
            </Typography>
            <Typography variant="h4"  sx={{ mb: 3, fontWeight: 'bold' }}>
              Expanding Horizons Through Curated Explorations
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.85 }}>
              Roamify was founded in 2026 with a bold objective: to make the world’s most spectacular cultural, active, and coastal destinations accessible through seamless luxury and authentic local immersion. We design custom-chartered itineraries that connect travelers with the true heartbeat of each region.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Whether you are watching the sunset over Amalfi cliffside villages, observing pride of lions on the Serengeti plains, or drinking high-grade matcha in Kyoto’s historic tea houses, our global curators coordinate every flight booking, room upgrade, private transfer, and entry ticket so you can wander with absolute peace of mind.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: { xs: 300, md: 400 },
                borderRadius: 4,
                background: 'linear-gradient(135deg, #0f766e 0%, #b45309 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 50px rgba(15, 118, 110, 0.15)',
              }}
            >
              <Typography variant="h1" sx={{ color: 'rgba(255, 255, 255, 0.15)', fontSize: '6rem', fontWeight: 900, letterSpacing: '0.05em', userSelect: 'none' }}>
                RMF
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Team list */}
        <SectionHeading
          eyebrow="Our Experts"
          title="Meet Our Destination Directors"
          subtitle="A veteran team of travel specialists, culinary critics, and safari rangers working to curate your seamless adventure."
        />
        <Grid container spacing={4}>
          {team.map((member) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.id}>
              <TeamCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
