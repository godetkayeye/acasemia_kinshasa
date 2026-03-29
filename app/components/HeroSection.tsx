'use client';

import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white pt-20 md:pt-32 pb-12 md:pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texte à gauche */}
          <AnimateOnScroll>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair leading-tight text-gray-900">
                Un coin d'Italie au cœur de Kinshasa
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
                Découvrez une cuisine italienne authentique dans un cadre chaleureux et élégant
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('reservation')}
                  className="btn-primary inline-block text-center"
                >
                  Réserver une table
                </button>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="btn-secondary inline-block text-center"
                >
                  Découvrir le menu
                </button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Image à droite */}
          <AnimateOnScroll>
            <div className="flex justify-center">
              <Image
                src="/Acasamia.jpg"
                alt="Restaurant Acasamia"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
