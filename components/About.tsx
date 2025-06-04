import React from 'react'
import Image from 'next/image'
import { Award, Users, Clock, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '15+', label: 'Ani de experiență' },
    { number: '5000+', label: 'Animale tratate' },
    { number: '4.9', label: 'Rating Google' },
    { number: '24/7', label: 'Disponibilitate urgențe' }
  ]

  const team = [
    {
      name: 'Dr. Maria Popescu',
      role: 'Medic veterinar principal',
      specialization: 'Chirurgie și medicina internă',
      experience: '15 ani experiență'
    },
    {
      name: 'Dr. Alexandru Ionescu',
      role: 'Medic veterinar',
      specialization: 'Cardiologie și urgențe',
      experience: '10 ani experiență'
    },
    {
      name: 'Dr. Elena Constantinescu',
      role: 'Medic veterinar',
      specialization: 'Dermatologie și nutriție',
      experience: '8 ani experiență'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Pasiunea pentru animale',
      description: 'Tratăm fiecare animal cu dragostea și atenția pe care le merită'
    },
    {
      icon: Award,
      title: 'Excelență în servicii',
      description: 'Standarde înalte de calitate în toate serviciile oferite'
    },
    {
      icon: Users,
      title: 'Echipă dedicată',
      description: 'Specialiști calificați și cu experiență vastă în domeniu'
    },
    {
      icon: Clock,
      title: 'Disponibilitate',
      description: 'Aici pentru tine și animalul tău oricând ai nevoie'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Despre VetCare Family
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Cu peste 15 ani de experiență în medicina veterinară, suntem dedicați să oferim 
            cea mai bună îngrijire pentru animalele tale de companie.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                Misiunea noastră
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                La VetCare Family, credem că fiecare animal merită cea mai bună îngrijire medicală. 
                Echipa noastră de specialiști pasionați lucrează zi de zi pentru a oferi servicii 
                veterinare de cea mai înaltă calitate într-un mediu cald și primitor.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Utilizăm echipamente moderne și tehnici avansate pentru a diagnostica și trata 
                o gamă largă de afecțiuni, de la consultații de rutină până la intervenții chirurgicale complexe.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-secondary-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Images placeholder */}
          <div className="space-y-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="text-center">
                <Users className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <p className="text-primary-700 font-medium">Echipa noastră profesională</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-secondary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-secondary-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Echipa noastră de specialiști
            </h3>
            <p className="text-lg text-secondary-600">
              Medicii veterinari cu experiență vastă și pasiune pentru animale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-primary-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-secondary-600 text-sm mb-2">
                  {member.specialization}
                </p>
                <p className="text-secondary-500 text-sm">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About