'use client';

import { Box, Typography } from '@mui/material';
import AboutCard from '@/components/About';

export default function AboutPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        درباره ما
      </Typography>

      <AboutCard />
    </Box>
  );
}
