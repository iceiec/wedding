import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1760669346457-135c09b75bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGVuZ2FnZW1lbnR8ZW58MXx8fHwxNzY1ODkwNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Engagement photo 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1563292674-a6d442bbc4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBkZXRhaWx8ZW58MXx8fHwxNzY1ODkwNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Wedding rings'
    },
    {
      url: 'https://images.unsplash.com/photo-1619905155368-47500f5fa2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NTg2NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Sunset photo'
    },
    {
      url: 'https://images.unsplash.com/photo-1677768061409-3d4fbd0250d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjU4MjQ1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Wedding flowers'
    },
    {
      url: 'https://images.unsplash.com/photo-1571332760709-8943098311f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBhaXNsZXxlbnwxfHx8fDE3NjU4MDE1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Wedding ceremony aisle'
    },
    {
      url: 'https://images.unsplash.com/photo-1752600827346-335f3e0603f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHdlZGRpbmclMjB2ZW51ZXxlbnwxfHx8fDE3NjU4OTA3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Beach venue'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50" style={{ backgroundColor: '#F2F0EB' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6" />
          <p
            className="text-xl text-gray-700"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Moments we've cherished together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
