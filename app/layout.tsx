import type { Metadata } from 'next'
import { Inter_Tight, JetBrains_Mono } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'
const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.short} | DevOps Engineer, AWS, Terraform, Docker`,
    template: `%s | ${site.short}`,
  },
  description: site.description,
  keywords: [
    'DevOps Engineer',
    'DevOps Engineer Nigeria',
    'DevOps Engineer Lagos',
    'AWS DevOps Engineer',
    'Cloud Infrastructure Engineer',
    'Terraform',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Infrastructure as Code',
  ],
  openGraph: {
    title: `${site.short} | DevOps Engineer`,
    description: site.description,
    url: '/',
    siteName: site.name,
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.short} | DevOps Engineer`,
    description: site.description,
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      className={`${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
