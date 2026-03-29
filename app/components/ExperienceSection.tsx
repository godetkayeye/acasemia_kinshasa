'use client';

import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <AnimateOnScroll className="md:w-1/2">
            <div className="relative h-96 rounded-lg shadow-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Ambiance A Casa Mia"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          <div className="md:w-1/2">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-playfair">
                Expérience & Ambiance
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <p className="text-gray-600 mb-6">
                À Casa Mia, chaque détail est pensé pour vous offrir une expérience sensorielle complète : lumière
                douce, musique italienne, parfums de basilic et de tomate fraîche.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  Terrasse extérieure avec piscine et bar à cocktails
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  Salle intérieure climatisée et cosy
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  Pergola couverte pour les soirées d'été
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  Idéal pour dîners romantiques, déjeuners d'affaires ou sorties entre amis
                </li>
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
