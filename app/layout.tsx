import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VetCare Family Clinic | Professional Veterinary Services in București',
  description: 'Professional veterinary care for your beloved pets. Located in București, we offer comprehensive veterinary services with a caring, family-oriented approach.',
  keywords: 'veterinary, vet clinic, pet care, București, Romania, animal hospital, pet health',
  authors: [{ name: 'VetCare Family Clinic' }],
  openGraph: {
    title: 'VetCare Family Clinic | Professional Veterinary Services',
    description: 'Professional veterinary care for your beloved pets in București.',
    type: 'website',
    locale: 'ro_RO',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}