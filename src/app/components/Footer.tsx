import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="py-12"
      style={{ backgroundColor: '#9a9797ff', color: '#F5F3ED' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-rose-400" fill="currentColor" />
            <h3
              className="text-3xl"
              style={{ fontFamily: 'Playfair Display, serif', color: '#F5F3ED' }}
            >
              Ed & Rheg
            </h3>
            <Heart className="w-6 h-6 text-rose-400" fill="currentColor" />
          </div>
          <p
            className="text-2xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#F5F3ED' }}
          >
            June 15, 2026
          </p>
          <p
            className="mb-2"
            style={{ fontFamily: 'Lato, sans-serif', color: '#D9D9D9' }}
          >
            We can't wait to celebrate with you!
          </p>
          <p
            className="text-sm"
            style={{ fontFamily: 'Lato, sans-serif', color: '#D9D9D9' }}
          >
            For questions, please contact us at{' '}
            <a
              href=""
              className="text-rose-400 hover:underline"
            >
              emailexample.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
