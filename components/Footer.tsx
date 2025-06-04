import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle, Heart } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Acasă', href: '#hero' },
    { name: 'Servicii', href: '#services' },
    { name: 'Prețuri', href: '#pricing' },
    { name: 'Despre noi', href: '#about' },
    { name: 'Testimoniale', href: '#testimonials' },
    { name: 'Contact', href: '#location' }
  ]

  const services = [
    'Consultații generale',
    'Vaccinări și profilaxie',
    'Chirurgie veterinară',
    'Cardiologie',
    'Urgențe 24/7',
    'Tratamente dentare'
  ]

  const legalLinks = [
    { name: 'Politica de confidențialitate', href: '#' },
    { name: 'Termeni și condiții', href: '#' },
    { name: 'GDPR', href: '#' },
    { name: 'Cookies', href: '#' }
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gradient-white mb-4">
                  VetCare Family
                </h3>
                <p className="text-secondary-300 leading-relaxed">
                  Clinica veterinară de încredere din București, dedicată sănătății și fericirii animalelor tale de companie.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Urmărește-ne</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://wa.me/40720123123" 
                    className="w-10 h-10 bg-secondary-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Navigație rapidă</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Serviciile noastre</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-secondary-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:0720123123" className="text-secondary-300 hover:text-primary-400 transition-colors">
                      0720.123.123
                    </a>
                    <p className="text-sm text-secondary-400">24/7 pentru urgențe</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <a href="mailto:contact@vetcarefamily.com" className="text-secondary-300 hover:text-primary-400 transition-colors">
                      contact@vetcarefamily.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-secondary-300">
                      Strada Maria Rosetti 26A<br />
                      București 020487, Sector 2
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-secondary-300">
                      Luni-Vineri: 08:00-20:00<br />
                      Weekend: 09:00-18:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="border-t border-secondary-800 py-8">
          <div className="bg-red-900 bg-opacity-50 rounded-xl p-6 text-center">
            <h4 className="text-xl font-bold text-red-200 mb-2 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Urgențe Veterinare 24/7
            </h4>
            <p className="text-red-300 mb-4">
              Pentru urgențele medicale ale animalelor tale, sună-ne oricand!
            </p>
            <a 
              href="tel:0720123123"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              0720.123.123 - Apelează acum
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-secondary-400">
              <span>© 2024 VetCare Family. Toate drepturile rezervate.</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-secondary-800 text-center text-secondary-500 text-sm">
            <p>
              Website dezvoltat cu ❤️ pentru profesioniștii veterinari care se îngrijesc cu adevărat de prezența lor online.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer