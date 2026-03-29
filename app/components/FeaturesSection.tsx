'use client';

import { AnimateOnScroll } from './AnimateOnScroll';

const features = [
  {
    icon: '◆',
    title: 'Cuisine authentique',
    description: 'Des recettes transmises de génération en génération, préparées avec amour.',
  },
  {
    icon: '★',
    title: 'Cadre unique',
    description: 'Terrasse, piscine, pergola… plusieurs ambiances pour chaque moment.',
  },
  {
    icon: '✦',
    title: 'Service attentionné',
    description: 'Une équipe dévouée pour une expérience sans faille.',
  },
  {
    icon: '❖',
    title: 'Expérience immersive',
    description: 'Lumières douces, musique italienne, parfums de basilic… on se croirait à Rome.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-5xl text-center">
        <AnimateOnScroll className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
            Pourquoi choisir A Casa Mia ?
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} className="card text-center hover-scale">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
