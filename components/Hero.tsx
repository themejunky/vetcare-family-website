'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Heart, Shield, Clock, Star } from 'lucide-react'
import AppointmentForm from './AppointmentForm'

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 leading-tight">
                Îngrijire profesională pentru 
                <span className="text-gradient block"> prietenii tăi blănoși</span>
              </h1>
              
              <p className="text-xl text-secondary-600 leading-relaxed">
                Clinica noastră veterinară oferă servicii complete de îngrijire pentru animalele de companie, 
                cu o echipă de specialiști dedicați și echipamente de ultimă generație.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Îngrijire cu dragoste</h3>
                  <p className="text-sm text-secondary-600">Tratăm fiecare animal ca pe propriul nostru</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Echipamente moderne</h3>
                  <p className="text-sm text-secondary-600">Tehnologie de ultimă generație</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Disponibili 24/7</h3>
                  <p className="text-sm text-secondary-600">Pentru urgențe veterinare</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Experiență vastă</h3>
                  <p className="text-sm text-secondary-600">Peste 15 ani în domeniu</p>
                </div>
              </div>
            </div>

            {/* CTA Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5000+</div>
                <div className="text-sm text-secondary-600">Animale tratate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">4.9</div>
                <div className="text-sm text-secondary-600">Rating Google</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-secondary-600">Ani experiență</div>
              </div>
            </div>
          </div>

          {/* Right Content - Appointment Form */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-secondary-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                  Programează o Consultație
                </h2>
                <p className="text-secondary-600">
                  Completează formularul și te vom contacta în cel mai scurt timp
                </p>
              </div>
              
              <AppointmentForm />
            </div>

            {/* Hero Image */}
            <div className="mt-8 relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/vet-images/lydia-torrey-AovflqCt9Ws-unsplash.jpg"
                alt="Veterinar îngrijind un câine"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero