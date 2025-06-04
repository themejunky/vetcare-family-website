'use client'

import React, { useState, useEffect } from 'react'
import { Phone, X, Clock } from 'lucide-react'

const StickyContactBar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 100px
      const shouldShow = window.scrollY > 100
      setIsVisible(shouldShow && !isDismissed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-2xl border-t-4 border-primary-400">
        <div className="container-max">
          <div className="flex items-center justify-between py-4 px-4">
            {/* Left Content */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg">
                  Sună pentru o programare
                </h4>
                <p className="text-primary-100 text-sm">
                  Disponibili 24/7 pentru urgențe veterinare
                </p>
              </div>
            </div>

            {/* Center Content - Mobile */}
            <div className="md:hidden">
              <a 
                href="tel:0720123123"
                className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Sună</span>
              </a>
            </div>

            {/* Right Content - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold">0720.123.123</div>
                <div className="text-primary-100 text-sm flex items-center justify-end space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>Urgențe 24/7</span>
                </div>
              </div>
              
              <a 
                href="tel:0720123123"
                className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Sună acum</span>
              </a>
            </div>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 ml-4"
              aria-label="Închide bara de contact"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Emergency pulse indicator */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-500 animate-pulse"></div>
      </div>
    </div>
  )
}

export default StickyContactBar