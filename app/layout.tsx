import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume Analyzer',
  description: 'ATS score and resume optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
