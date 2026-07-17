import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {post.image && (
        <CardMedia component="img" height="160" image={post.image} alt={post.title} />
      )}
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
          <Chip label={post.category} size="small" color="primary" variant="outlined" />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">{post.readTime}</Typography>
          </Box>
        </Box>

        <Typography variant="subtitle1"   sx={{ fontWeight: "bold", mb: 1 }}>
          {post.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
          {post.excerpt}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 28, height: 28, fontSize: '0.7rem', bgcolor: 'secondary.main' }}>
            {post.authorAvatar}
          </Avatar>
          <Box>
            <Typography variant="caption"   sx={{ fontWeight: "bold", display: "block" }}>
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
