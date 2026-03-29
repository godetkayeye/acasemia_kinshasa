'use client';

import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimateOnScroll className="md:w-1/2">
            <div className="relative h-96 rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/Acasia1.jpg"
                alt="A Casa Mia Intérieur"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          <div className="md:w-1/2">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-playfair">
                À propos d'A Casa Mia
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <p className="text-gray-600 mb-4">
                A Casa Mia est bien plus qu'un restaurant italien à Kinshasa. C'est une invitation à voyager, à
                savourer, à se laisser envelopper par l'âme de l'Italie.
              </p>
              <p className="text-gray-600 mb-6">
                Fondé avec passion, notre établissement allie tradition culinaire italienne, ambiance méditerranéenne
                et élégance contemporaine. Nous proposons une cuisine méditerranéenne et européenne, préparée avec des
                ingrédients frais et sélectionnés avec soin.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✦</span>
                  <span>Cuisine italienne authentique</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">◆</span>
                  <span>Terrasse extérieure & pergola</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">❖</span>
                  <span>Vins italiens & cocktails maison</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">★</span>
                  <span>Service attentionné & convivial</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
