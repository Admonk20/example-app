import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import duration from 'dayjs/plugin/duration'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
// import { userAgent } from 'next/server'
// import { cookieToInitialState } from 'wagmi'
import { type ChainId } from '@azuro-org/toolkit'
import { polygonAmoy } from 'viem/chains'
import { constants } from 'helpers'
import { appChains } from 'wallet/chains'

import Providers from 'compositions/Providers/Providers'
import PageLayout from 'compositions/PageLayout/PageLayout'

import '../scss/globals.scss'


dayjs.extend(utc)
dayjs.extend(duration)

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
  metadataBase: new URL(constants.baseUrl),
  title: ' Vookie Sports',
  description: 'Decentralized Sports Betting',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = cookies()

  // const initialState = cookieToInitialState(config, headers().get('cookie'))
  const _initialChainId = cookieStore.get('appChainId')?.value
  const initialLiveState = JSON.parse(cookieStore.get('live')?.value || 'false')

  const initialChainId = _initialChainId &&
                  (appChains.find(chain => chain.id === +_initialChainId)?.id as ChainId) || polygonAmoy.id

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers
          // initialState={initialState}
          userAgent=""
          initialLiveState={initialLiveState}
          initialChainId={initialChainId}
        >
          <PageLayout>
            {children}
          </PageLayout>
        </Providers>
      </body>
    </html>
  )
}