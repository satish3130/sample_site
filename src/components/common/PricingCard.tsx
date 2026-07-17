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
  Button,
  Chip,
  Divider,
  Rating,
} from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { PricingPlan } from '../../types';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <Card variant={plan.popular ? 'elevation' : 'outlined'} elevation={plan.popular ? 4 : 0} sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {plan.popular && (
        <Chip
          label="Best Seller"
          color="secondary"
          size="small"
          sx={{ position: 'absolute', top: 12, right: 12, zIndex: 1 }}
        />
      )}
      {plan.image && (
        <CardMedia component="img" height="160" image={plan.image} alt={plan.name} />
      )}
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {plan.name}
          </Typography>
          {plan.duration && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
              <AccessTimeIcon fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">{plan.duration}</Typography>
            </Box>
          )}
        </Box>

        {plan.rating && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
            <Rating value={plan.rating} readOnly size="small" precision={0.1} />
            <Typography variant="caption" color="text.secondary">({plan.rating})</Typography>
          </Box>
        )}

        <Typography variant="body2" color="text.secondary"  sx={{ mb: 1 }}>
          {plan.description}
        </Typography>

        <Divider sx={{ my: 1.5 }} />

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mb: 1 }}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
            {plan.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {plan.period}
          </Typography>
        </Box>

        <List dense sx={{ flex: 1, mb: 2 }}>
          {plan.features.map((feature, idx) => (
            <ListItem key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CheckCircleOutlinedIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary={feature}  />
            </ListItem>
          ))}
        </List>

        <Button
          variant={plan.popular ? 'contained' : 'outlined'}
          color={plan.popular ? 'secondary' : 'primary'}
          fullWidth
        >
          {plan.cta}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
