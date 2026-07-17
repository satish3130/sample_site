import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  IconButton,
  SxProps,
  Theme,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { TeamMember } from '../../types';

interface TeamCardProps {
  member: TeamMember;
  sx?: SxProps<Theme>;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, sx }) => {
  return (
    <Card sx={{ textAlign: 'center', height: '100%', ...sx }}>
      <CardContent sx={{ p: 4 }}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: 'primary.main',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1.5rem',
            mx: 'auto',
            mb: 2.5,
            border: '4px solid rgba(15, 118, 110, 0.12)',
            boxShadow: '0 4px 12px rgba(15, 118, 110, 0.15)',
          }}
        >
          {member.avatar}
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5, color: 'text.primary' }}>
          {member.name}
        </Typography>
        <Typography variant="body2" color="secondary" sx={{ fontWeight: 700, mb: 2, letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
          {member.role}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
          {member.bio}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          {member.socials.twitter && (
            <IconButton size="small" href={member.socials.twitter} color="primary" sx={{ border: '1px solid', borderColor: 'divider' }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
          )}
          {member.socials.linkedin && (
            <IconButton size="small" href={member.socials.linkedin} color="primary" sx={{ border: '1px solid', borderColor: 'divider' }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
          )}
          {member.socials.github && (
            <IconButton size="small" href={member.socials.github} color="primary" sx={{ border: '1px solid', borderColor: 'divider' }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
