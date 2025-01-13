import { AppBar, Box, Toolbar } from '@mui/material';
import NavLink from './NavLink';
import BurgerMenu from './BurgerMenu';

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: 60,
          paddingInline: { xs: '20px', sm: '50px' },
        }}
      >
        <NavLink href="/">Home</NavLink>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            gap: '80px',
            height: '100%',
          }}
        >
          <NavLink href="/characters">Characters</NavLink>
          <NavLink href="/locations">Locations</NavLink>
          <NavLink href="/episodes">Episodes</NavLink>
        </Box>

        <BurgerMenu />
      </Toolbar>
    </AppBar>
  );
}
