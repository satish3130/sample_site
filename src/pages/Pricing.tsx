import React from 'react';
import { Box, Container, Grid, Card, Typography } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SectionHeading from '../components/common/SectionHeading';
import PricingCard from '../components/common/PricingCard';
import { pricingPlans } from '../data';
import FAQSection from '../components/sections/FAQSection';

const Pricing: React.FC = () => {

  return (
    <Box sx={{ backgroundColor: 'background.default', pt: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 12 } }}>
        <SectionHeading
          eyebrow="Signature Expeditions"
          title="Choose Your Dream Itinerary"
          subtitle="Each signature handcrafted package includes premium boutique stays, skip-the-line entries, private transport, and local guides."
        />
        <Grid container spacing={4} sx={{ alignItems: 'stretch', mb: 8 }}>
          {pricingPlans.map((plan) => (
            <Grid size={{ xs: 12, md: 4 }} key={plan.id}>
              <PricingCard plan={plan} />
            </Grid>
          ))}
        </Grid>

        {/* Core Inclusions Banner */}
        <Card
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            border: '1px solid rgba(15, 118, 110, 0.08)',
            background: 'linear-gradient(135deg, rgba(15, 118, 110, 0.02) 0%, rgba(180, 83, 9, 0.02) 100%)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.01)',
          }}
        >
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
                Included In Every Package
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                We believe in hassle-free travel. That is why all our packages are curated all-inclusive experiences from the moment you land.
              </Typography>
            </Grid>
            
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={3}>
                {[
                  {
                    icon: <FlightTakeoffIcon sx={{ fontSize: 32 }} />,
                    title: 'Airport Transfers & Internal Transit',
                    desc: 'Private chauffeur airport pickups, internal flight tickets, and high-speed rail green car passes are pre-booked.'
                  },
                  {
                    icon: <CalendarMonthIcon sx={{ fontSize: 32 }} />,
                    title: 'Flexible Bookings & Dates',
                    desc: 'Change travel dates for free up to 30 days prior to launch, or receive full credits for future travel packages.'
                  },
                  {
                    icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
                    title: 'Bespoke Custom Extensions',
                    desc: 'Wish to extend your stay or add an excursion? Our dedicated travel curator will tailor it to your needs.'
                  }
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                    <Box sx={{ color: 'primary.main', mb: 1 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.6, display: 'block' }}>
                      {item.desc}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <FAQSection />
    </Box>
  );
};

export default Pricing;
