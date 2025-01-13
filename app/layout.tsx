import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { Metadata } from 'next';
// import localFont from "next/font/local";
import './globals.css';
import MUIThemeProvider from '@/theme/ThemeProvider';
import Header from '../components/Header';
import WindowRefresher from '@/components/WindowRefresher';

// import createCache from '@emotion/cache';
// import { CacheProvider } from '@emotion/react';
// import { createTheme, ThemeProvider } from '@mui/material';
// import { StoreProvider } from '@/store/StoreProvider';

// const cache = createCache({ key: 'css', prepend: true });

export const metadata: Metadata = {
  title: 'Rick and Morty Universe',
  description:
    'Info about characters, episodes and locations from Rick and Morty',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <CacheProvider value={cache}>
    <MUIThemeProvider>
      <html lang="en">
        {/* <head>
          <link rel="stylesheet" href="globals.css" as='style' />
          </head> */}
        <body>
          <WindowRefresher>
            <Header />
            {children}
          </WindowRefresher>
        </body>
      </html>
    </MUIThemeProvider>
    // </CacheProvider>
  );
}
