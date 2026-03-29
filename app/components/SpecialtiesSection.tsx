'use client';

import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

const specialties = [
  {
    icon: '🍕',
    title: 'Pizzas Artisanales',
    description: 'Pâtes napolitaines cuites au feu de bois, garnies de produits frais.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    icon: '🍝',
    title: 'Pâtes & Risottos',
    description: 'Fabriquées chaque jour, avec des sauces traditionnelles.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    icon: '🥩',
    title: 'Plats Raffinés',
    description: 'Osso buco, viandes grillées, poissons du jour… élégance et saveurs.',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    icon: '🍷',
    title: 'Vins Italiens',
    description: 'Sélection rigoureuse de vins rouges, blancs et rosés d\'Italie.',
    image: '/Acasamia.jpg',
  },
  {
    icon: '🥗',
    title: 'Options Végétariennes',
    description: 'Des plats savoureux sans viande, pour tous les goûts.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    icon: '🍹',
    title: 'Cocktails & Apéros',
    description: 'Bar à cocktails sur la terrasse avec vue sur la piscine.',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

export default function SpecialtiesSection() {
  return (
    <section id="menu" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">Nos Spécialités</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <AnimateOnScroll key={index} className="card hover-scale">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {specialty.icon} {specialty.title}
              </h3>
              <p className="text-gray-600">{specialty.description}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
