import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
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

const BlogCard: React.FC<BlogCardProps> = ({ post, sx }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 16px 30px rgba(15, 118, 110, 0.08)',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)',
          },
        },
        ...sx 
      }}
    >
      {/* Blog Image */}
      <Box sx={{ height: 160, overflow: 'hidden', position: 'relative' }}>
        <CardMedia
          component="img"
          image={post.image}
          alt={post.title}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </Box>

      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <BadgeChip label={post.category} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
            <AccessTimeIcon sx={{ fontSize: 14 }} />
            <Typography variant="caption" sx={{ fontWeight: 500 }}>{post.readTime}</Typography>
          </Box>
        </Box>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 'bold', mb: 1, lineHeight: 1.4, flexGrow: 0, color: 'text.primary', fontSize: '1.05rem' }}
        >
          {post.title}
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 3, 
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flexGrow: 1
          }}
        >
          {post.excerpt}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 'auto' }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: 'primary.main',
              fontSize: '0.75rem',
              fontWeight: 'bold',
            }}
          >
            {post.authorAvatar}
          </Avatar>
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block', color: 'text.primary' }}>
              {post.author}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {post.date}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
