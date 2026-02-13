'use client';

import {
  Box,
  Typography,
  Avatar,
  IconButton
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function AboutCard() {
  return (
    <Box
      sx={{
        width: 850,
        maxWidth: '100%',
        height: 430,
        borderRadius: 4,
        background:
          'radial-gradient(circle at 20% 30%, #1e3a8a, #1e40af, #020617)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Orb 1 */}
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: '#38bdf8',
          filter: 'blur(120px)',
          top: '-20%',
          left: '-10%',
          opacity: 0.6,
        }}
      />

      {/* Orb 2 */}
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: '#6366f1',
          filter: 'blur(120px)',
          bottom: '-20%',
          right: '-10%',
          opacity: 0.6,
        }}
      />

      {/* Card */}
      <Box
        sx={{
          zIndex: 2,
          width: '100%',
          maxWidth: 460,
          p: 3,
          borderRadius: 4,
          background: 'rgba(30,41,59,0.7)',
          border: '1px solid rgba(148,163,184,0.2)',
          boxShadow:
            '0 0 25px rgba(56,189,248,0.6), 0 0 55px rgba(99,102,241,0.4)',
          textAlign: 'center',
        }}
      >
        <Avatar
          src="/image/IMG_0747.JPG"
          sx={{
            width: 200,
            height: 200,
            mx: 'auto',
            border: '4px solid #38bdf8',
            boxShadow: '0 0 25px #38bdf8',
          }}
        />

        <Typography
          variant="h6"
          sx={{ color: '#e0f2fe', mt: 2 }}
        >
          Amirmahdi Salamat
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: '#93c5fd', mt: 0.5 }}
        >
          Front-End Developer
        </Typography>

        {/* Socials */}
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <IconButton sx={{ color: '#e5e7eb' }}>
            <GitHubIcon />
          </IconButton>

          <IconButton sx={{ color: '#60a5fa' }}>
            <LinkedInIcon />
          </IconButton>

          <IconButton sx={{ color: '#818cf8' }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
