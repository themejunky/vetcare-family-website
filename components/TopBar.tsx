import React from 'react'
import { Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'

const TopBar = () => {
  return (
    <div className="bg-primary-800 text-white py-2 hidden md:block">
      <div className="container-max">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:0720123123" className="hover:text-primary-200 transition-colors">
                0720.123.123
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Strada Maria Rosetti 26A, București 020487</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-primary-200">Urmărește-ne:</span>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="hover:text-primary-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="hover:text-primary-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/40720123123" 
                className="hover:text-primary-200 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar