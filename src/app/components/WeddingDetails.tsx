import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Music } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WeddingDetails() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const events = [
    {
      icon: Music,
      title: 'Ceremony',
      time: '4:00 PM',
      location: 'Seaside Chapel',
      address: '123 Ocean Drive, Malibu, CA 90265',
      details: 'Join us for our intimate ceremony overlooking the Pacific Ocean.'
    },
    {
      icon: Calendar,
      title: 'Reception',
      time: '6:00 PM',
      location: 'Sunset Garden',
      address: '456 Coastal Way, Malibu, CA 90265',
      details: 'Celebrate with us with dinner, dancing, and memories under the stars.'
    }
  ];

  return (
    <section id="details" className="py-24" style={{ backgroundColor: '#F2F0EB' }}>
      <div className="container mx-auto px-4">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2
            className="text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Wedding Details
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6" />
          <p
            className="text-2xl text-gray-700"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Friday, June 20, 2026
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center">
                    <event.icon className="w-7 h-7 text-rose-500" />
                  </div>
                  <h3
                    className="text-3xl"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {event.title}
                  </h3>
                </div>

                <div className="space-y-4" style={{ fontFamily: 'Lato, sans-serif' }}>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">{event.location}</p>
                      <p className="text-gray-600 text-sm">{event.address}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4">{event.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1752600827346-335f3e0603f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHdlZGRpbmclMjB2ZW51ZXxlbnwxfHx8fDE3NjU4OTA3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Beach wedding venue"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </motion.div>

        <motion.div
          {...fadeIn}
          className="text-center mt-12"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          <p className="text-lg text-gray-700 mb-4">
            Dress Code: Semi-Formal Beach Attire
          </p>
          <p className="text-gray-600">
            Light, flowy fabrics and colors welcome. Please avoid stiletto heels on the sand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
