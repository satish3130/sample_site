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

const avatarColors = ['#6C63FF', '#FF6584', '#43D9A3', '#FFA726'];

const TeamCard: React.FC<TeamCardProps> = ({ member, sx }) => {
  const avatarBg = avatarColors[(member.id - 1) % avatarColors.length];

  return (
    <Card sx={{ textAlign: 'center', ...sx }}>
      <CardContent sx={{ p: 4 }}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: avatarBg,
            fontWeight: 800,
            fontSize: '1.4rem',
            mx: 'auto',
            mb: 2,
            boxShadow: `0 8px 24px ${avatarBg}50`,
          }}
        >
          {member.avatar}
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
          {member.name}
        </Typography>
        <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1.5 }}>
          {member.role}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 2.5 }}>
          {member.bio}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
          {member.socials.twitter && (
            <IconButton size="small" href={member.socials.twitter} sx={{ color: '#1DA1F2' }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
          )}
          {member.socials.linkedin && (
            <IconButton size="small" href={member.socials.linkedin} sx={{ color: '#0A66C2' }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
          )}
          {member.socials.github && (
            <IconButton size="small" href={member.socials.github} sx={{ color: '#333' }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
