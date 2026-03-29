'use client';

import { useState } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const message = `Bonjour, je souhaite réserver une table.\n\nNom: ${formData.name}\nTéléphone: ${formData.phone}\nDate: ${formData.date}\nHeure: ${formData.time}\nNombre de personnes: ${formData.guests}\nMessage: ${formData.message}`;

    const whatsappUrl = `https://wa.me/243812331938?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: '',
    });
  };

  return (
    <section id="reservation" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
            Réservez votre table
          </h2>
          <p className="text-gray-600 mt-2">
            Remplissez le formulaire ci-dessous pour réserver une table. Nous vous contacterons rapidement.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="bg-gray-50 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none transition"
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none transition"
                  required
                  placeholder="+243 800 000 000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                  Heure *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
                Nombre de personnes *
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              >
                <option value="1">1 personne</option>
                <option value="2">2 personnes</option>
                <option value="3">3-4 personnes</option>
                <option value="5">5-6 personnes</option>
                <option value="7">7+ personnes</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Précisions ou demandes spéciales..."
                rows={3}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none transition resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn-primary inline-block text-lg"
              >
                Réserver maintenant sur WhatsApp
              </button>
              <p className="text-sm text-gray-600 mt-3">
                Vous serez redirigé vers WhatsApp pour confirmer votre réservation
              </p>
            </div>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
