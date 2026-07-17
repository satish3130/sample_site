import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { TeamMember } from '../../types';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <Card variant="outlined" sx={{ textAlign: 'center', height: '100%' }}>
      <CardContent>
        <Avatar sx={{ width: 72, height: 72, mx: 'auto', mb: 2, bgcolor: 'primary.main', fontSize: '1.4rem', fontWeight: 'bold' }}>
          {member.avatar}
        </Avatar>
        <Typography variant="h6"   sx={{ fontWeight: "bold", mb: 1 }}>
          {member.name}
        </Typography>
        <Typography variant="body2" color="secondary"   sx={{ textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.72rem', fontWeight: "bold", mb: 1 }}>
          {member.role}
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{ mb: 2 }}>
          {member.bio}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
          {member.socials.twitter && (
            <IconButton size="small" href={member.socials.twitter} aria-label="Twitter">
              <TwitterIcon fontSize="small" />
            </IconButton>
          )}
          {member.socials.linkedin && (
            <IconButton size="small" href={member.socials.linkedin} aria-label="LinkedIn">
              <LinkedInIcon fontSize="small" />
            </IconButton>
          )}
          {member.socials.github && (
            <IconButton size="small" href={member.socials.github} aria-label="GitHub">
              <GitHubIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
