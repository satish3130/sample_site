import React from 'react';
import { Box, Container } from '@mui/material';
import SectionHeading from '../common/SectionHeading';
import FAQAccordion from '../common/FAQAccordion';
import { faqs } from '../../data';

const FAQSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Frequently Asked Questions"
          subtitle="Have queries regarding booking custom itineraries, visa document assistance, cancellation policies, or safety guidelines? Check below."
        />
        <FAQAccordion items={faqs} />
      </Container>
    </Box>
  );
};

export default FAQSection;
