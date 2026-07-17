import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import SectionHeading from '../components/common/SectionHeading';
import BlogCard from '../components/common/BlogCard';
import { blogPosts } from '../data';

const Blog: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.default', minHeight: '85vh' }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Travel Blog"
          title="Wanderlust Chronicles"
          subtitle="Explore travel guides, packing lists, destination tips, and local secrets shared by our expert travel curators and guides."
        />
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
