'use client';

import { createTheme, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

const dark = createTheme({
  palette: {
    mode: 'dark',
  },

  spacing: 1,

  components: {},
});

interface Props {
  children: ReactNode;
}

export default function MUIThemeProvider({
  children,
  // theme = Theme.DARK,
}: Props) {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
}
