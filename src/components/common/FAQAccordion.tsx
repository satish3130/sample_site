import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { FAQItem } from '../../types';

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleChange = (id: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? id : false);
  };

  return (
    <Box>
      {items.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          disableGutters
          elevation={0}
          sx={{
            mb: 1.5,
            border: '1px solid',
            borderColor: expanded === item.id ? 'primary.main' : 'divider',
            borderRadius: '12px !important',
            overflow: 'hidden',
            transition: 'all 0.25s ease',
            '&:before': { display: 'none' },
            ...(expanded === item.id && {
              boxShadow: '0 4px 20px rgba(15, 118, 110, 0.08)',
            }),
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: expanded === item.id ? 'primary.main' : 'text.secondary',
                  transition: 'color 0.2s',
                }}
              />
            }
            sx={{
              px: 3,
              py: 1.5,
              '& .MuiAccordionSummary-content': { my: 0.5 },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: expanded === item.id ? 'primary.main' : 'text.primary',
                transition: 'color 0.2s',
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3, pb: 2.5 }}>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQAccordion;
