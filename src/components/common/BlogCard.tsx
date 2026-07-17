import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  SxProps,
  Theme,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BadgeChip from './BadgeChip';
import type { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  sx?: SxProps<Theme>;
}

const categoryColors: Record<string, string> = {
  Engineering: '#6C63FF',
  Design: '#FF6584',
  Performance: '#43D9A3',
  Business: '#FFA726',
};

const gradientBgs: Record<string, string> = {
  engineering: 'linear-gradient(135deg, #6C63FF 0%, #9C63FF 100%)',
  design: 'linear-gradient(135deg, #FF6584 0%, #FF9A8B 100%)',
  performance: 'linear-gradient(135deg, #43D9A3 0%, #29B6F6 100%)',
};

const authorColors: Record<string, string> = {
  DK: '#6C63FF',
  AP: '#FF6584',
  JT: '#43D9A3',
};

const BlogCard: React.FC<BlogCardProps> = ({ post, sx }) => {
  const categoryColor = categoryColors[post.category] || '#6C63FF';
  const bgGradient = gradientBgs[post.image] || gradientBgs.engineering;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', ...sx }}>
      {/* Image placeholder with gradient */}
      <Box
        sx={{
          height: 180,
          background: bgGradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            top: -60,
            right: -60,
          }}
        />
        <Typography
          variant="h3"
          sx={{ color: 'rgba(255,255,255,0.15)', fontWeight: 900, userSelect: 'none' }}
        >
          {post.category[0]}
        </Typography>
      </Box>

      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <BadgeChip label={post.category} colorHex={categoryColor} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.disabled' }}>
            <AccessTimeIcon sx={{ fontSize: 13 }} />
            <Typography variant="caption">{post.readTime}</Typography>
          </Box>
        </Box>

        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.4, flex: 1, fontSize: '1rem' }}
        >
          {post.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2.5 }}>
          {post.excerpt}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: authorColors[post.authorAvatar] || '#6C63FF',
              fontSize: '0.7rem',
              fontWeight: 700,
            }}
          >
            {post.authorAvatar}
          </Avatar>
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
              {post.author}
            </Typography>
            <Typography variant="caption" color="text.disabled">
              {post.date}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
