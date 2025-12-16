import { motion } from 'motion/react';
import { Gift, ExternalLink } from 'lucide-react';

export function Registry() {
  const registries = [
    {
      name: 'Amazon',
      icon: '🛍️',
      description: 'Home essentials and wish list items',
      link: '#'
    },
    {
      name: 'Crate & Barrel',
      icon: '🏠',
      description: 'Kitchen and dining collections',
      link: '#'
    },
    {
      name: 'Honeymoon Fund',
      icon: '✈️',
      description: 'Contribute to our dream trip to Bali',
      link: '#'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Gift className="w-16 h-16 text-rose-500 mx-auto mb-6" />
          <h2
            className="text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Registry
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6" />
          <p
            className="text-xl text-gray-700 max-w-2xl mx-auto"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Your presence is the greatest gift, but if you wish to honor us with a gift, 
            we've registered at the following places.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {registries.map((registry, index) => (
            <motion.a
              key={registry.name}
              href={registry.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow cursor-pointer block"
            >
              <div className="text-5xl mb-4">{registry.icon}</div>
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {registry.name}
              </h3>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {registry.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-rose-500">
                <span style={{ fontFamily: 'Lato, sans-serif' }}>View Registry</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
