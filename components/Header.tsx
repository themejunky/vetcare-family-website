'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Acasă', to: 'hero', offset: -80 },
    { name: 'Servicii', to: 'services', offset: -80 },
    { name: 'Preturi', to: 'pricing', offset: -80 },
    { name: 'Despre Noi', to: 'about', offset: -80 },
    { name: 'Testimoniale', to: 'testimonials', offset: -80 },
    { name: 'Contact', to: 'location', offset: -80 },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
      style={{ marginTop: isScrolled ? '0' : '40px' }}
    >
      <div className="container-max">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold text-gradient cursor-pointer"
            >
              VetCare Family
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={item.offset}
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors cursor-pointer"
                activeClass="text-primary-600"
                spy={true}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn-primary cursor-pointer inline-block"
            >
              Programează o Consultație
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-secondary-200">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  className="text-secondary-700 hover:text-primary-600 font-medium transition-colors cursor-pointer"
                  activeClass="text-primary-600"
                  spy={true}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="hero"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-primary cursor-pointer inline-block text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Programează o Consultație
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header