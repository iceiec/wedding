import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-rose-400" fill="currentColor" />
            <h3
              className="text-3xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Sarah & James
            </h3>
            <Heart className="w-6 h-6 text-rose-400" fill="currentColor" />
          </div>
          <p
            className="text-2xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            June 15, 2026
          </p>
          <p
            className="text-gray-400 mb-2"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            We can't wait to celebrate with you!
          </p>
          <p
            className="text-gray-500 text-sm"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            For questions, please contact us at{' '}
            <a href="mailto:sarahandjames@wedding.com" className="text-rose-400 hover:underline">
              sarahandjames@wedding.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
