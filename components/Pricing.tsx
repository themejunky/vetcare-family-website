import React from 'react'
import { Check, Star, Zap, Heart } from 'lucide-react'

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Consultație Standard',
      price: '150',
      currency: 'RON',
      description: 'Consultație veterinară completă pentru animalul tău',
      features: [
        'Examen clinic complet',
        'Diagnosticare de bază',
        'Recomandări pentru tratament',
        'Sfaturi pentru îngrijire',
        'Monitorizare post-consultație'
      ],
      popular: false,
      icon: Heart
    },
    {
      name: 'Pachet Preventiv',
      price: '320',
      currency: 'RON',
      description: 'Program complet de prevenție și vaccinare',
      features: [
        'Consultație generală',
        'Vaccinare completă',
        'Deparazitare internă și externă',
        'Testare pentru boli comune',
        'Plan de îngrijire personalizat',
        'Urmărire pe 6 luni'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Urgență 24/7',
      price: '250',
      currency: 'RON',
      description: 'Servicii de urgență disponibile non-stop',
      features: [
        'Consultație de urgență',
        'Diagnostic rapid',
        'Tratament de urgență',
        'Monitorizare intensivă',
        'Suport post-intervenție'
      ],
      popular: false,
      icon: Zap
    }
  ]

  const additionalServices = [
    { service: 'Sterilizare/Castrare', price: '300-500 RON' },
    { service: 'Chirurgie minoră', price: '200-400 RON' },
    { service: 'Analize de laborator', price: '80-150 RON' },
    { service: 'Radiografie', price: '120-200 RON' },
    { service: 'Ecografie', price: '150-250 RON' },
    { service: 'Microchipare', price: '80 RON' },
    { service: 'Tuns și îngrijire', price: '60-120 RON' },
    { service: 'Tratament dentar', price: '200-400 RON' }
  ]

  return (
    <section id="pricing" className="section-padding bg-secondary-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Prețuri transparente
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferim prețuri corecte și transparente pentru toate serviciile noastre veterinare. 
            Fără costuri ascunse, doar îngrijire de calitate pentru animalele tale.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular 
                    ? 'border-primary-500 scale-105 transform' 
                    : 'border-secondary-200 hover:border-primary-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Cel mai popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    plan.popular ? 'bg-primary-100' : 'bg-secondary-100'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      plan.popular ? 'text-primary-600' : 'text-secondary-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary-600">
                      {plan.price}
                    </span>
                    <span className="text-secondary-600 text-lg ml-2">
                      {plan.currency}
                    </span>
                  </div>
                  
                  <p className="text-secondary-600">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#hero"
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors duration-200 text-center block ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-800'
                  }`}
                >
                  Programează acum
                </a>
              </div>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Servicii suplimentare
            </h3>
            <p className="text-lg text-secondary-600">
              Prețuri pentru alte servicii veterinare pe care le oferim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((item, index) => (
              <div 
                key={index}
                className="bg-secondary-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-semibold text-secondary-900 mb-2">
                  {item.service}
                </h4>
                <p className="text-primary-600 font-bold">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 bg-primary-50 rounded-2xl p-8 border border-primary-200">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-primary-800 mb-4 text-center">
              Informații importante despre prețuri
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-primary-700">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    Prețurile pot varia în funcție de complexitatea cazului
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    Consultațiile de urgență în week-end au un supliment de 50 RON
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    Oferim plăți în rate pentru intervenții chirurgicale complexe
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    Pachetele preventive includ toate serviciile menționate
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    Reduceri de 10% pentru programarea celei de-a doua consultații
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    Acceptam carduri, numerar și viramente bancare
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing