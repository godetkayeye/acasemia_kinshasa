'use client';

import { AnimateOnScroll } from './AnimateOnScroll';

const testimonials = [
  {
    text: 'Un des meilleurs restaurants italiens de Kinshasa. La pizza Margherita est parfaite, comme à Naples !',
    author: 'Sophie D.',
    role: 'Expatriée française',
  },
  {
    text: 'On se sent comme en Italie. L\'accueil, la musique, les plats… tout est authentique et chaleureux.',
    author: 'Jean-Luc M.',
    role: 'Homme d\'affaires',
  },
  {
    text: 'Cuisine exceptionnelle et service impeccable. Notre lieu préféré pour les dîners en amoureux.',
    author: 'Lina & David',
    role: 'Couple congolais',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl text-center">
        <AnimateOnScroll className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
            Ce que disent nos clients
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} className="testimonial-card">
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">— {testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
