/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { useTheme } from "@emotion/react";

export default function Hedar({ titel, suptitel, isDahbord = false }) {
    const theme = useTheme();

    return (
       <Box mb={isDahbord ? 2 : 4}>
      <Typography sx={{ color: theme.palette.info.light, fontWeight: "bold" }} variant="h5">
          {titel}
      </Typography>
      <Typography variant="body1">{suptitel}</Typography>
  </Box>
         
    );
} 