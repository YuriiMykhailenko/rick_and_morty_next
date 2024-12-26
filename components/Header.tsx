import { AppBar, Box, Toolbar } from '@mui/material';
import NavLink from './NavLink';

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: 60,
          paddingInline: '50px !important',
        }}
      >
        <NavLink href="/">Home</NavLink>

        <Box sx={{ display: 'flex', gap: '80px', height: '100%' }}>
          <NavLink href="/characters">Characters</NavLink>
          <NavLink href="/locations">Locations</NavLink>
          <NavLink href="/episodes">Episodes</NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
