import SupabaseProvider from './supabase-provider';
import { PropsWithChildren } from 'react';
import '@/styles/globals.css';
import { ThemeProvider } from './theme-provider';

export const dynamic = 'force-dynamic';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>
          Kokoemon - AI-Powered Web3 UI Development Platform | Build Faster, Build Better
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!--  Social tags   --> */}
        <meta
          name="keywords"
          content="web3 development, UI platform, AI development, NextJS, TypeScript, Tailwind CSS, Supabase, blockchain UI, dApp development"
        />
        <meta 
          name="description" 
          content="Kokoemon is an AI-powered web3 UI development platform that helps developers build stunning blockchain applications faster. Built with Next.js, TypeScript, and Tailwind CSS."
        />
        {/* <!-- Schema.org markup for Google+ --> */}
        <meta itemProp="name" content="Kokoemon - AI-Powered Web3 UI Development Platform" />
        <meta
          itemProp="description"
          content="Build web3 applications 10x faster with Kokoemon's AI-powered development platform. Modern UI components, TypeScript support, and seamless blockchain integration."
        />
        <meta
          itemProp="image"
          content="https://kokoemon.xyz/og-image.png"
        />
        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kokoemon - AI-Powered Web3 UI Development Platform"
        />
        <meta
          name="twitter:description"
          content="Build web3 applications 10x faster with Kokoemon's AI-powered development platform. Modern UI components, TypeScript support, and seamless blockchain integration."
        />
        <meta
          name="twitter:image"
          content="https://kokoemon.xyz/og-image.png"
        />
        {/* <!-- Open Graph data --> */}
        <meta
          property="og:title"
          content="Kokoemon - AI-Powered Web3 UI Development Platform"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kokoemon.xyz" />
        <meta
          property="og:image"
          content="https://kokoemon.xyz/og-image.png"
        />
        <meta
          property="og:description"
          content="Build web3 applications 10x faster with Kokoemon's AI-powered development platform. Modern UI components, TypeScript support, and seamless blockchain integration."
        />
        <meta
          property="og:site_name"
          content="Kokoemon"
        />
        <link rel="canonical" href="https://kokoemon.xyz" />
        <link rel="icon" href="/img/favicon.ico" />
      </head>
      <body id={'root'} className="loading bg-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>
            <main id="skip">{children}</main>
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
