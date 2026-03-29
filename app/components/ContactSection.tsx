'use client';

import Link from 'next/link';
import { AnimateOnScroll } from './AnimateOnScroll';

export default function ContactSection() {
  const restaurantName = process.env.NEXT_PUBLIC_RESTAURANT_NAME;
  const restaurantPhone = process.env.NEXT_PUBLIC_RESTAURANT_PHONE;
  const restaurantAddress = process.env.NEXT_PUBLIC_RESTAURANT_ADDRESS;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <AnimateOnScroll>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Nous trouver</h2>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="space-y-4 text-lg mb-8">
                <div className="flex items-start">
                  <span className="text-2xl text-red-500 mr-4">📍</span>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p>{restaurantAddress}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl text-green-400 mr-4">📞</span>
                  <div>
                    <p className="font-semibold">Téléphone / WhatsApp</p>
                    <Link
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition-colors underline"
                    >
                      {restaurantPhone}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl text-yellow-400 mr-4">🕐</span>
                  <div>
                    <p className="font-semibold">Horaires</p>
                    <p>Mardi – Dimanche : 12h–14h30 / 19h–22h30</p>
                    <p className="text-sm text-gray-400">Fermé le lundi</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div>
                <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
                <div className="flex space-x-6 text-3xl">
                  <Link href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                    f
                  </Link>
                  <Link href="#" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                    📷
                  </Link>
                  <Link href="#" className="hover:text-blue-300 transition-colors" aria-label="Twitter">
                    𝕏
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="md:w-1/2">
            <AnimateOnScroll>
              <div className="rounded-lg overflow-hidden shadow-xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.455558087043!2d15.304572314779898!3d-4.325420396669869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTknMzEuNSJTIDE1wrAyMyczNi40IkU!5e0!3m2!1sfr!2scd!4v1627829834567!5m2!1sfr!2scd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="A Casa Mia Location Map"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
