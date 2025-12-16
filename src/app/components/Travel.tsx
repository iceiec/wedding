import { motion } from 'motion/react';
import { Plane, Hotel, Car, Info } from 'lucide-react';

export function Travel() {
  const accommodations = [
    {
      name: 'Malibu Beach Inn',
      type: 'Luxury Beachfront',
      distance: '0.5 miles from venue',
      phone: '(310) 555-0100',
      website: 'malibubeachinn.com'
    },
    {
      name: 'Coastal Comfort Hotel',
      type: 'Mid-Range Option',
      distance: '2 miles from venue',
      phone: '(310) 555-0200',
      website: 'coastalcomfort.com'
    },
    {
      name: 'Sunset Suites',
      type: 'Budget Friendly',
      distance: '3 miles from venue',
      phone: '(310) 555-0300',
      website: 'sunsetsuites.com'
    }
  ];

  return (
    <section id="travel" className="py-24 bg-white">
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
            Travel & Stay
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6" />
          <p
            className="text-xl text-gray-700"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Everything you need to know for your visit to Malibu
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center p-6 bg-rose-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Flying In
              </h3>
              <p
                className="text-gray-700"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Los Angeles International Airport (LAX) is the nearest major airport, 
                approximately 45 minutes from the venue.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-rose-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Getting Around
              </h3>
              <p
                className="text-gray-700"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                We recommend renting a car for easy travel. Ride-sharing services 
                are also readily available in the area.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-rose-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Parking
              </h3>
              <p
                className="text-gray-700"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Complimentary parking is available at the venue. Valet service 
                will be provided for your convenience.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <Hotel className="w-10 h-10 text-rose-500" />
              <h3
                className="text-3xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Where to Stay
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {accommodations.map((hotel, index) => (
                <motion.div
                  key={hotel.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <h4
                    className="text-xl mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {hotel.name}
                  </h4>
                  <p
                    className="text-rose-600 mb-3"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {hotel.type}
                  </p>
                  <div
                    className="text-sm text-gray-600 space-y-1"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    <p>{hotel.distance}</p>
                    <p>{hotel.phone}</p>
                    <p className="text-rose-500 hover:underline cursor-pointer">
                      {hotel.website}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p
              className="text-center mt-8 text-gray-700"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              A room block has been reserved at each hotel. Please mention "Sarah & James Wedding" 
              when booking to receive a special rate.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
