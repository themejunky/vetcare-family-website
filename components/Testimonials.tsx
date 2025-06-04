import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Ionescu',
      location: 'București',
      rating: 5,
      text: 'Echipa de la VetCare Family este excepțională! Cățelușa mea a fost tratată cu o grijă deosebită și profesionalismul medicilor este remarcabil. Recomand cu încredere!',
      pet: 'Luna (Golden Retriever)',
      service: 'Vaccinare și consultație generală'
    },
    {
      name: 'Alexandru Popescu',
      location: 'București',
      rating: 5,
      text: 'Dr. Popescu și echipa au salvat viața pisicii mele într-o situație de urgență. Disponibilitatea 24/7 și rapiditatea intervenției au fost excepționale. Mulțumesc din inimă!',
      pet: 'Misha (Pisică europeană)',
      service: 'Urgență și chirurgie'
    },
    {
      name: 'Elena Constantinescu',
      location: 'București',
      rating: 5,
      text: 'Clinica are echipamente moderne și personalul este foarte prietenos. Explicatțiile oferite sunt clare și detaliate. Îmi aduc toate animalele aici pentru controale regulate.',
      pet: 'Rex și Bella (Ciobanul german și Labrador)',
      service: 'Controale de rutină și vaccinare'
    },
    {
      name: 'Andrei Stoica',
      location: 'București',
      rating: 5,
      text: 'Am rămas impresionat de răbdarea și delicatețea cu care au tratat iepurașul meu. Personal calificat și împrumutat. Cu siguranță voi reveni!',
      pet: 'Fluffy (Iepure)',
      service: 'Consultație exotică și tratament'
    },
    {
      name: 'Cristina Marinescu',
      location: 'București',
      rating: 5,
      text: 'Serviciile de sterilizare au fost efectuate perfect. Pisica mea s-a recuperat rapid și medicii au oferit instruțiuni clare pentru îngrijirea post-operatorie. Excelență în tot!',
      pet: 'Whiskers (Pisică persamă)',
      service: 'Sterilizare și îngrijire post-operatorie'
    },
    {
      name: 'Mihai Georgescu',
      location: 'București',
      rating: 5,
      text: 'Prețurile sunt corecte și transparente, iar calitatea serviciilor este excepțională. Apreciez foarte mult sinceritatea și profesionalismul întregii echipe.',
      pet: 'Bruno (Bulldog francez)',
      service: 'Tratament dermatologic'
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Ce spun clienții noștri
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Mărturiile proprietarilor de animale care au experimentat serviciile noastre de calitate 
            și îngrijirea profesională oferită animalelor lor de companie.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-secondary-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-secondary-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-secondary-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Pet & Service Info */}
              <div className="space-y-2 mb-6">
                <div className="text-sm text-primary-600 font-semibold">
                  🐶 {testimonial.pet}
                </div>
                <div className="text-sm text-secondary-600">
                  🏥 {testimonial.service}
                </div>
              </div>

              {/* Customer Info */}
              <div className="border-t border-secondary-200 pt-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-secondary-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Vrei să fii următoarea poveste de succes?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Alătură-te celor peste 5000 de proprietari care au încredere în serviciile noastre veterinare de excelență.
            </p>
            <a 
              href="#hero" 
              className="inline-block bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Programează o consultație
            </a>
          </div>
        </div>

        {/* Google Rating Display */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-100 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjU2IDEyLjI1QzIyLjU2IDExLjQ3IDIyLjQ5IDEwLjcyIDIyLjM2IDEwSDEyVjE0LjI2SDE3LjE5QzE2Ljk2IDE1LjU5IDE2LjI2IDE2Ljc0IDE1LjIxIDE3LjU0VjIwLjM2SDE4Ljk2QzIxLjMxIDE4LjE5IDIyLjU2IDE1LjQ3IDIyLjU2IDEyLjI1WiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBkPSJNMTIgMjNDMTUuMjQgMjMgMTcuOTUgMjEuOTIgMTguOTYgMjAuMzZMMTUuMjEgMTcuNTRDMTQuMzYgMTguMDkgMTMuMjYgMTguNDMgMTIgMTguNDNDOC44NyAxOC40MyA2LjIyIDE2LjI1IDUuMjcgMTMuM0gxLjQ0VjE2LjIxQzIuNDQgMTguMTEgNiAxOC4zMyA2IDE4LjMzQzYgMTguMzMgOS41NiAyMyAxMiAyM1oiIGZpbGw9IiMzNEE4NTMiLz4KPC9zdmc+Cg=="
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              <span className="text-lg font-semibold text-secondary-900">Google Reviews</span>
            </div>
            
            <div className="flex items-center justify-center mb-2">
              <span className="text-3xl font-bold text-primary-600 mr-2">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <p className="text-secondary-600">
              Bazat pe 150+ recenzii autentice
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials