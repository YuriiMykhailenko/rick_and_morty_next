'use client';

import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavLink from './NavLink';
import { MouseEvent, useState } from 'react';

export default function BurgerMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink href="/characters">Characters</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink href="/locations">Locations</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink href="/episodes">Episodes</NavLink>
        </MenuItem>
      </Menu>
    </Box>
  );
}
