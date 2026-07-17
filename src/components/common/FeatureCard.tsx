import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Rating,
  Divider,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { Feature } from '../../types';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {feature.image && (
        <CardMedia
          component="img"
          height="180"
          image={feature.image}
          alt={feature.title}
        />
      )}
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography variant="h6"   sx={{ fontWeight: "bold" }}>
            {feature.title}
          </Typography>
          {feature.category && (
            <Chip label={feature.category} size="small" />
          )}
        </Box>

        {feature.rating && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
            <Rating value={feature.rating} readOnly size="small" precision={0.1} />
            <Typography variant="caption" color="text.secondary">
              ({feature.rating})
            </Typography>
          </Box>
        )}

        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {feature.description}
        </Typography>

        <Divider sx={{ my: 1.5 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              {feature.duration || 'Flexible'}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="caption" color="text.secondary"  sx={{ display: "block" }}>
              From
            </Typography>
            <Typography variant="subtitle2" color="primary"  sx={{ fontWeight: "bold" }}>
              {feature.price}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
