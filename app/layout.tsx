import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arda Taşkın - Öğretmen & Eğitim Koçu',
  description:
    'Arda Taşkın - METU Bilgisayar Mühendisliği öğrencisi ve eğitim koçu. LGS, ortaokul özel ders hizmeti, LGS ve YKS mentorluk hizmetleri.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
