import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import FAQAccordion from '../common/FAQAccordion';
import { faqs } from '../../data';

const FAQSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="md">
        <Typography variant="overline" color="primary"   sx={{ mb: 1, display: "block" }}>
          Questions & Answers
        </Typography>
        <Typography variant="h4"   sx={{ fontWeight: "bold", mb: 1 }}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" color="text.secondary"  sx={{ mb: 4 }}>
          Have questions about bookings, visas, cancellations, or safety? Find answers below.
        </Typography>
        <FAQAccordion items={faqs} />
      </Container>
    </Box>
  );
};

export default FAQSection;
