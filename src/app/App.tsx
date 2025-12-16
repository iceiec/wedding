import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { WeddingDetails } from './components/WeddingDetails';
import { RSVP } from './components/RSVP';
import { Gallery } from './components/Gallery';
import { Travel } from './components/Travel';
import { Registry } from './components/Registry';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <OurStory />
      <WeddingDetails />
      <RSVP />
      <Gallery />
      <Travel />
      <Registry />
      <Footer />
    </div>
  );
}
