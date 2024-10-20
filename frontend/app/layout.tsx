import { Metadata } from 'next';
import localFont from 'next/font/local';
// import Head from 'next/head';
import '@mantine/charts/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import './globals.css';
import Provider from './ui/provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Auth',
  },
};

const theme = createTheme({
  primaryColor: 'dark',
  fontFamily: 'var(--font-geist-sans)',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased "flex w-screen flex-1 flex-col items-center justify-center"`}
      >
        <Provider>
          <MantineProvider theme={theme}>
            {/* <Head>
              <title>{`${metadata.title}`}</title>
              </Head> */}
            <main className="flex w-screen flex-1 flex-col items-center justify-center">
              {children}
            </main>
          </MantineProvider>
        </Provider>
      </body>
    </html>
  );
}
