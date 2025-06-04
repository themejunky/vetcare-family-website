import React from 'react'
import { MapPin, Phone, Clock, Mail, Car, Bus, Navigation } from 'lucide-react'

const Location = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: ['0720.123.123', 'Disponibil 24/7 pentru urgențe'],
      action: 'tel:0720123123'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@vetcarefamily.com', 'Răspundem în maxim 2 ore'],
      action: 'mailto:contact@vetcarefamily.com'
    },
    {
      icon: MapPin,
      title: 'Adresă',
      details: ['Strada Maria Rosetti 26A', 'București 020487, Sector 2'],
      action: 'https://maps.google.com/?q=Strada+Maria+Rosetti+26A+Bucuresti'
    },
    {
      icon: Clock,
      title: 'Program',
      details: ['Luni-Vineri: 08:00-20:00', 'Sâmbătă-Duminică: 09:00-18:00'],
      action: null
    }
  ]

  const transportOptions = [
    {
      icon: Car,
      title: 'Cu mașina',
      description: 'Parcare gratuită disponibilă în fața clădirii'
    },
    {
      icon: Bus,
      title: 'Transport public',
      description: 'Stația de autobuz "Rosetti" la 2 minute de mers pe jos'
    },
    {
      icon: Navigation,
      title: 'Metro',
      description: 'Stația de metro "Universitate" la 10 minute de m ers pe jos'
    }
  ]

  return (
    <section id="location" className="section-padding bg-secondary-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Locația și Contact
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Găsește-ne ușor în centrul Bucureștiului. Suntem aici pentru a oferi 
            cea mai bună îngrijire veterinară animalelor tale de companie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-secondary-900 mb-8">
              Informații de contact
            </h3>
            
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                const isClickable = info.action
                
                const content = (
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary-900 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`${
                          idx === 0 ? 'text-primary-600 font-semibold' : 'text-secondary-600 text-sm'
                        }`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                )
                
                return isClickable ? (
                  <a key={index} href={info.action} className="block hover:scale-105 transition-transform duration-200">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                )
              })}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-red-800 mb-2 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Urgențe 24/7
              </h4>
              <p className="text-red-700 mb-3">
                Pentru urgențele veterinare, sună-ne oricand la numărul de mai sus. 
                Avem mereu un medic veterinar de gardă.
              </p>
              <a 
                href="tel:0720123123"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Sună acum pentru urgențe
              </a>
            </div>
          </div>

          {/* Map and Location */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary-800 mb-2">
                    VetCare Family Clinic
                  </h4>
                  <p className="text-primary-700">
                    Strada Maria Rosetti 26A<br />
                    București 020487, Sector 2
                  </p>
                </div>
              </div>
              <div className="p-6">
                <a 
                  href="https://maps.google.com/?q=Strada+Maria+Rosetti+26A+Bucuresti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Deschide în Google Maps</span>
                </a>
              </div>
            </div>

            {/* Transport Options */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-bold text-secondary-900 mb-6">
                Cum ajungi la noi
              </h4>
              <div className="space-y-4">
                {transportOptions.map((option, index) => {
                  const IconComponent = option.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-secondary-900">
                          {option.title}
                        </h5>
                        <p className="text-sm text-secondary-600">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Pregătit să vizitezi clinica?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Programă-te pentru o consultație sau sună-ne direct pentru informații suplimentare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#hero" 
              className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Clock className="w-5 h-5" />
              <span>Programează online</span>
            </a>
            <a 
              href="tel:0720123123" 
              className="bg-primary-800 hover:bg-primary-900 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Sună acum</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location