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
        <SectionHeading
          eyebrow="Contact Us"
          title="Get In Touch Today"
          subtitle="Have a question or want to build something custom? Drop us a line and our expert team will respond within 24 hours."
        />

        <Grid container spacing={5}>
          {/* Contact Details */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
              Let's Talk!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              Whether you need technical support, enterprise options, or custom theme development, we are ready to assist.
            </Typography>

            <Stack spacing={3}>
              {[
                { icon: <EmailIcon color="primary" />, label: 'Email', value: 'hello@AP Tech.com' },
                { icon: <PhoneIcon color="primary" />, label: 'Phone', value: '+1 (555) 019-2834' },
                { icon: <RoomIcon color="primary" />, label: 'Office', value: '100 Pine Street, San Francisco, CA' },
              ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: 'rgba(108,99,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 600 }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ border: '1px solid rgba(108,99,255,0.12)' }}>
              <CardContent sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
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
                        label="Subject"
                        name="subject"
                        fullWidth
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        label="Message"
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
                        gradient
                        fullWidth
                        sx={{ mt: 1, py: 1.5 }}
                      >
                        Send Message
                      </AppButton>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            Your message has been sent successfully! We will get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
