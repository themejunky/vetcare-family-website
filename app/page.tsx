import React from 'react'
import Header from '@/components/Header'
import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import StickyContactBar from '@/components/StickyContactBar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Testimonials />
      <Location />
      <Footer />
      <StickyContactBar />
    </main>
  )
}