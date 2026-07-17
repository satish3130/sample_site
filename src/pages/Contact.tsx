import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  Stack,
  Alert,
  Snackbar,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import SectionHeading from '../components/common/SectionHeading';
import AppButton from '../components/common/AppButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.default', minHeight: '85vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 2 }}>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Plan Your Bespoke Trip"
            subtitle="Have questions about customizable itineraries, group reservations, travel advisories, or partnerships? Reach our travel curators."
          />
        </Box>

        <Grid container spacing={5}>
          {/* Contact Details */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
              Travel HQ & Curators
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              Our dedicated curators are available to structure customized luxury tours, assist with travel insurance/visa documentation, and resolve flight changes.
            </Typography>

            <Stack spacing={3}>
              {[
                { icon: <EmailIcon color="primary" />, label: 'Email Curators', value: 'curator@roamify.travel' },
                { icon: <PhoneIcon color="primary" />, label: 'Call Travel Concierge', value: '+1 (800) ROAM-HELP' },
                { icon: <RoomIcon color="primary" />, label: 'Headquarters Office', value: '12 Luxury Boulevard, Colaba, Mumbai' },
              ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 1,
                      bgcolor: 'rgba(15, 118, 110, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 'bold' }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: '0 8px 30px rgba(0,0,0,0.01)' }}>
              <CardContent sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Full Name"
                        name="name"
                        fullWidth
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Email Address"
                        name="email"
                        type="email"
                        fullWidth
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        label="Intended Destination (e.g. Kyoto, Japan)"
                        name="subject"
                        fullWidth
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        label="Tell us about your dream trip (preferred dates, group size, budget, or activities)"
                        name="message"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={12}>
                      <AppButton
                        type="submit"
                        variant="contained"
                        loading={loading}
                        color="secondary"
                        fullWidth
                        sx={{ mt: 1, py: 1.6 }}
                      >
                        Submit Travel Query
                      </AppButton>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Thank you! Our travel expert will contact you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
