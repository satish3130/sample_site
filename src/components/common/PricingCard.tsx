import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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
      variant={plan.popular ? 'elevation' : 'outlined'}
      elevation={plan.popular ? 8 : 0}
      sx={{
        height: '100%',
        position: 'relative',
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        boxShadow: plan.popular ? '0 10px 30px rgba(15, 118, 110, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.02)',
        border: (theme) => plan.popular 
          ? `2px solid ${theme.palette.secondary.main}` 
          : `1px solid rgba(15, 118, 110, 0.08)`,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(15, 118, 110, 0.12)',
          borderColor: plan.popular ? 'secondary.main' : 'primary.main',
        },
        ...sx,
      }}
    >
      {/* Most Popular Badge overlay */}
      {plan.popular && (
        <Box
          sx={{
            position: 'absolute',
            top: -14,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
          }}
        >
          <BadgeChip
            icon={<StarIcon sx={{ fontSize: '14px !important' }} />}
            label="Best Seller"
            color="secondary"
            sx={{ px: 2, py: 1.8, boxShadow: '0 4px 12px rgba(180, 83, 9, 0.3)' }}
          />
        </Box>
      )}

      {/* Package Image Area */}
      <Box sx={{ position: 'relative', height: 180, overflow: 'hidden', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
        <CardMedia
          component="img"
          image={plan.image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80'}
          alt={plan.name}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Duration Chip on top of image */}
        {plan.duration && (
          <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
            <BadgeChip
              icon={<AccessTimeIcon sx={{ fontSize: '12px !important' }} />}
              label={plan.duration}
              sx={{
                bgcolor: 'rgba(15, 118, 110, 0.9)',
                color: '#ffffff',
                border: 'none',
                backdropFilter: 'blur(4px)',
                fontWeight: 700,
                textTransform: 'none',
              }}
            />
          </Box>
        )}
      </Box>

      {/* Package Body */}
      <CardContent sx={{ p: 3.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
              {plan.name}
            </Typography>
            
            {plan.rating && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                <StarIcon sx={{ color: '#f59e0b', fontSize: 16 }} />
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {plan.rating}
                </Typography>
              </Box>
            )}
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, minHeight: 40 }}>
            {plan.description}
          </Typography>
          
          <Divider sx={{ mb: 2.5, borderColor: 'rgba(15, 118, 110, 0.06)' }} />

          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
            <Typography variant="h4" sx={{ fontWeight: 850, color: 'primary.main' }}>
              {plan.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {plan.period}
            </Typography>
          </Box>
        </Box>

        {/* Inclusions checklist */}
        <List dense sx={{ flex: 1, mb: 3 }}>
          {plan.features.map((feature, idx) => (
            <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CheckCircleIcon color="primary" sx={{ fontSize: 16 }} />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                slotProps={{ primary: { variant: 'body2', color: 'text.primary', sx: { fontWeight: 500 } } }}
              />
            </ListItem>
          ))}
        </List>

        <AppButton
          fullWidth
          variant={plan.popular ? 'contained' : 'outlined'}
          color={plan.popular ? 'secondary' : 'primary'}
          sx={{ py: 1.5 }}
        >
          {plan.cta}
        </AppButton>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
