import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} A Casa Mia. Tous droits réservés. Restaurant italien à Kinshasa.</p>
        <p className="mt-2 text-sm">
          Conçu avec <span className="text-red-500">❤</span> pour une expérience italienne authentique.
        </p>
      </div>
    </footer>
  );
}
