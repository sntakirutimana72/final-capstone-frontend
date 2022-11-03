import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideDrawer from './SideDrawer';
import { AdminProtectedNode } from '../middlewares';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'center',
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

  {
    id: 5,
    path: '/delete-room',
    name: 'Delete Room',
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
  const [drawerWidth, setDrawerWidth] = React.useState(240);
  const handleDrawerOpen = () => {
    setOpen(true);
    setDrawerWidth(240);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setDrawerWidth(0);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
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
          EASY BOOKING
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
      <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen} className={open ? 'nav__button open' : 'nav__button close'}>
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </Box>
  );
};
export default SideNav;
