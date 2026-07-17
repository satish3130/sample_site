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
              sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.12em', display: 'block', mb: 2 }}
            >
              Our Mission
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Empowering Developers to Build Beautiful Interfaces
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.85, fontSize: '1.05rem' }}>
              We started AP Tech in 2026 with a simple conviction: building premium user interfaces shouldn't require weeks of repetitive code. We created a modular, consistent, and highly reusable design kit that allows engineering teams of any size to launch exceptional products.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Our design systems leverage Material UI to combine robust accessiblity standards with sleek, modern gradients, glassmorphism, and responsive typography out-of-the-box.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: { xs: 300, md: 400 },
                borderRadius: 4,
                background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
                boxShadow: '0 24px 64px rgba(108,99,255,0.22)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h1" sx={{ color: 'rgba(255,255,255,0.12)', fontSize: '8rem', fontWeight: 900 }}>
                LMY
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Team list */}
        <SectionHeading
          eyebrow="Our Team"
          title="Meet the Brains Behind AP Tech"
          subtitle="A globally distributed team of designers, engineers, and product builders dedicated to crafting developer experiences."
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
