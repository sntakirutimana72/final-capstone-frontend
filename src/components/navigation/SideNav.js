import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SideDrawer from './SideDrawer';
import { AdminProtectedNode } from '../middlewares';

const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));
const anyUsersPaths = [
  {
    id: 1,
    path: '/rooms',
    name: 'ROOMS',
  },
  {
    id: 2,
    path: '/reserve',
    name: 'Reserve Form',
  },
  {
    id: 3,
    path: '/my-reservations',
    name: 'My Reservations',
  },
];
const adminsPaths = [
  {
    id: 4,
    path: '/add-room',
    name: 'Add Room',
  },
];
const otherPaths = [
  {
    id: 6,
    path: '/logout',
    name: 'Logout',
  },
];

const SideNav = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} className="sidenav">
      <CssBaseline />

      <Toolbar sx={{ position: 'absolute' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Easy Booking
        </Typography>
      </Toolbar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          Easy Booking
          <IconButton onClick={handleDrawerClose} className="close__drawer">
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <SideDrawer paths={anyUsersPaths} />
          <AdminProtectedNode>
            <SideDrawer paths={adminsPaths} />
          </AdminProtectedNode>
          <SideDrawer paths={otherPaths} />
        </List>
      </Drawer>
    </Box>
  );
};

export default SideNav;
