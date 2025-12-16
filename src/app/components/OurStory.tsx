import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function OurStory() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section id="our-story" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2
            className="text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Story
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760669346457-135c09b75bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGVuZ2FnZW1lbnR8ZW58MXx8fHwxNzY1ODkwNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Romantic couple"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3
                className="text-3xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                How We Met
              </h3>
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Our story began on a rainy September evening at a cozy coffee shop in downtown Portland. 
                Sarah was reading her favorite book when James accidentally spilled his cappuccino on her table. 
                What started as an embarrassing moment turned into a five-hour conversation about travel, 
                dreams, and the perfect cup of coffee. From that day forward, we've been inseparable.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <h3
                className="text-3xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Proposal
              </h3>
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                After three wonderful years together, James planned the perfect proposal. He took Sarah 
                back to the same coffee shop where we first met, which he had decorated with fairy lights 
                and roses. As a live musician played our favorite song, James got down on one knee and 
                asked Sarah to be his forever. Of course, she said yes!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563292674-a6d442bbc4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBkZXRhaWx8ZW58MXx8fHwxNzY1ODkwNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wedding rings"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
