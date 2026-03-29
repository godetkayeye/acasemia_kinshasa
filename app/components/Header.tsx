'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-md shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-playfair text-red-600">
          A Casa Mia
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-full bg-gray-800 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-full bg-gray-800 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full bg-gray-800 transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-raleway">
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-red-600 transition-colors focus:outline-none"
            >
              À propos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('menu')}
              className="hover:text-red-600 transition-colors focus:outline-none"
            >
              Menu
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('reservation')}
              className="hover:text-red-600 transition-colors focus:outline-none"
            >
              Réservation
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-red-600 transition-colors focus:outline-none"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden">
            <ul className="space-y-4 font-raleway">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-red-600 transition-colors w-full text-left"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-red-600 transition-colors w-full text-left"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reservation')}
                  className="hover:text-red-600 transition-colors w-full text-left"
                >
                  Réservation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-red-600 transition-colors w-full text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
