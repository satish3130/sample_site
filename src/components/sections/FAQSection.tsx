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
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Have questions about AP Tech? Find quick answers to common inquiries below or reach out to our team."
        />
        <FAQAccordion items={faqs} />
      </Container>
    </Box>
  );
};

export default FAQSection;
