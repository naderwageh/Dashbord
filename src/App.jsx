
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import TopBar from "./Components/TopBar";
import SaidBar from "./Components/SaidBar.jsx";
import { useState, useMemo } from 'react';
import { getDesingnTokens } from '../src/them.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mood, setMood] = useState(localStorage.getItem("currenmode")?localStorage.getItem("currenmode"):"light");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  // const [mood, setMood] = useState('dark');
  const customTheme = useMemo(() => createTheme(getDesingnTokens(mood)), [mood])

  return (
    <ThemeProvider theme={customTheme} >
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setmood={setMood} />
        <SaidBar handleDrawerClose={handleDrawerClose} open={open} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
       <Outlet/>
        </Box>
      </Box>

    </ThemeProvider>
  );
}
