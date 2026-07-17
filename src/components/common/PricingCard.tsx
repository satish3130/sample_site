import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import AppButton from './AppButton';
import BadgeChip from './BadgeChip';
import type { PricingPlan } from '../../types';

interface PricingCardProps {
  plan: PricingPlan;
  sx?: SxProps<Theme>;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, sx }) => {
  return (
    <Card
      sx={{
        height: '100%',
        position: 'relative',
        overflow: 'visible',
        ...(plan.popular && {
          background: `linear-gradient(145deg, #fff 0%, ${plan.color}08 100%)`,
          border: `2px solid ${plan.color}`,
          transform: { md: 'scale(1.05)' },
          boxShadow: `0 24px 64px ${plan.color}30`,
        }),
        ...sx,
      }}
    >
      {plan.popular && (
        <Box
          sx={{
            position: 'absolute',
            top: -14,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        >
          <BadgeChip
            icon={<StarIcon sx={{ fontSize: '14px !important' }} />}
            label="Most Popular"
            colorHex={plan.color}
            sx={{ px: 1.5 }}
          />
        </Box>
      )}
      <CardContent sx={{ p: 3.5, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
            {plan.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
            {plan.description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: plan.color }}>
              {plan.price}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {plan.period}
            </Typography>
          </Box>
        </Box>

        <List dense sx={{ flex: 1, mb: 3 }}>
          {plan.features.map((feature, idx) => (
            <ListItem key={idx} disableGutters sx={{ py: 0.4 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ fontSize: 18, color: plan.color }} />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                slotProps={{ primary: { variant: 'body2', color: 'text.primary' } }}
              />
            </ListItem>
          ))}
        </List>

        <AppButton
          fullWidth
          variant={plan.popular ? 'contained' : 'outlined'}
          sx={{
            ...(plan.popular
              ? {
                  background: `linear-gradient(135deg, ${plan.color} 0%, ${plan.color}CC 100%)`,
                  boxShadow: `0 8px 24px ${plan.color}40`,
                }
              : {
                  borderColor: plan.color,
                  color: plan.color,
                  '&:hover': { borderColor: plan.color, background: `${plan.color}10` },
                }),
          }}
        >
          {plan.cta}
        </AppButton>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
