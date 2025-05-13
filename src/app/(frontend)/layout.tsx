import type { Metadata } from 'next'
import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import StickyButton from '@/components/StickyButton'
import TimedBanner from '@/components/Banner'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import GAConsent from '@/components/GAConsent'

interface Banner {
  title: string;
  message: string;
  linkText: string;
  linkUrl: string;
  displayDelay: number;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const payload = await getPayload({ config: configPromise })
  const bannerData = await payload.find({
    collection: 'banners',
    where: {
      isActive: {
        equals: true,
      },
    },
    limit: 1,
  });

  const banner = bannerData.docs[0] as Banner | undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="overflow-x-hidden overscroll-y-none">
        <Providers>
          <Header />
          {children}
          <Footer />
          <GAConsent />
          {banner && (
            <TimedBanner
              title={banner.title}
              message={banner.message}
              linkText={banner.linkText}
              linkUrl={banner.linkUrl}
              displayDelay={banner.displayDelay}
            />
          )}
          <StickyButton link="/contact" label="Contact" />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@JaimieH',
  },
}
