import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'center',
}));

const SideNav = () => {
  const links = [
    {
      id: 1,
      path: '/rooms',
      text: 'ROOMS',
    },
    {
      id: 2,
      path: '/reserve',
      text: 'Reserve Form',
    },
    {
      id: 3,
      path: '/my-reservations',
      text: 'My Reservations',
    },
    {
      id: 4,
      path: '/add-room',
      text: 'Add Room',
    },

    {
      id: 5,
      path: '/delete-room',
      text: 'Delete Room',
    },

  ];
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
        className="drawer"
      >
        <DrawerHeader>
          EASY BOOKING
        </DrawerHeader>
        <Divider />
        <List>
          {links.map((link) => (
            <ListItem button component={NavLink} to={link.path} key={link.path} className="h-16 font-bold text-lg menuItem">
              {link.text}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen} className={open ? 'nav__button open' : 'nav__button close'}>
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </Box>
  );
};
export default SideNav;
