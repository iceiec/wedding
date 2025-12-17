import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Check } from 'lucide-react';

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    dietaryRestrictions: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('RSVP submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="rsvp" className="py-24 bg-white" >
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
            RSVP
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6" />
          <p
            className="text-xl text-gray-700"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            We can't wait to celebrate with you! Please RSVP by May 1, 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-rose-50 rounded-lg shadow-xl p-8 md:p-12"
          style={{ backgroundColor: '#F2F0EB' }}
        >
          <form onSubmit={handleSubmit} className="space-y-6" >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                style={{ fontFamily: 'Lato, sans-serif' }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                style={{ fontFamily: 'Lato, sans-serif' }}
              />
            </div>

            <div>
              <label
                htmlFor="attending"
                className="block text-gray-700 mb-2"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Will you be attending? *
              </label>
              <select
                id="attending"
                name="attending"
                required
                value={formData.attending}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                <option value="yes">Joyfully Accepts</option>
                <option value="no">Regretfully Declines</option>
              </select>
            </div>

            {formData.attending === 'yes' && (
              <>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-gray-700 mb-2"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="dietaryRestrictions"
                    className="block text-gray-700 mb-2"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Vegetarian, Vegan, Gluten-free, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  />
                </div>
              </>
            )}

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Message to the Couple
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white resize-none"
                style={{ fontFamily: 'Lato, sans-serif' }}
                placeholder="Share your excitement or a special memory..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-4 rounded-md hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {submitted ? (
                <>
                  <Check className="w-5 h-5" />
                  RSVP Submitted!
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" fill="currentColor" />
                  Submit RSVP
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
