import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mindverse',
  description: 'Mindverse AI Platform',git ad
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Mindverse</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
