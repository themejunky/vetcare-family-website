import React from 'react'
import Image from 'next/image'
import { 
  Stethoscope, 
  Scissors, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  Phone
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Consultații generale',
      description: 'Examene complete de rutină, diagnosticare și tratament pentru toate speciile de animale de companie.',
      features: ['Examen clinic complet', 'Diagnosticare rapidă', 'Plan de tratament personalizat']
    },
    {
      icon: Shield,
      title: 'Vaccinări și Profilaxie',
      description: 'Programe complete de vaccinare și măsuri preventive pentru a menține sănătatea animalelor.',
      features: ['Vaccinuri obligatorii', 'Deparazitare', 'Consultanță preventivă']
    },
    {
      icon: Scissors,
      title: 'Chirurgie și Intervenții',
      description: 'Intervenții chirurgicale de rutină și complexe într-un mediu steril și sigur.',
      features: ['Sterilizare/Castrare', 'Chirurgie de urgență', 'Microchipare']
    },
    {
      icon: Heart,
      title: 'Cardiologie Veterinară',
      description: 'Diagnosticarea și tratamentul afecțiunilor cardiovasculare la animale.',
      features: ['EKG veterinar', 'Ecografie cardiacă', 'Tratament cardiac']
    },
    {
      icon: Zap,
      title: 'Urgențe 24/7',
      description: 'Servicii de urgență disponibile non-stop pentru situațiile critice.',
      features: ['Gardă permanentă', 'Ambulanță veterinară', 'Intervenții rapide']
    },
    {
      icon: Users,
      title: 'Consiliere și Educație',
      description: 'Ghidare pentru proprietarii de animale în toate aspectele îngrijirii.',
      features: ['Educație nutrițională', 'Comportament animal', 'Îngrijire la domiciliu']
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Serviciile noastre
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferim o gamă completă de servicii veterinare pentru a ne asigura că animalele 
            tale de companie primesc cea mai bună îngrijire posibilă.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="bg-secondary-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-secondary-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-secondary-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ai nevoie de o consultație de urgență?
            </h3>
            <p className="text-xl text-primary-100 mb-8">
              Suntem disponibili 24/7 pentru urgențele tale veterinare. 
              Nu ezita să ne contactezi oricând!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0720123123" 
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Sună acum: 0720.123.123</span>
              </a>
              <a 
                href="#hero" 
                className="bg-primary-800 hover:bg-primary-900 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Clock className="w-5 h-5" />
                <span>Programează online</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services