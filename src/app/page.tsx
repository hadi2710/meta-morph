import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedModels from './components/FeaturedModels';
import BrandIntro from './components/BrandIntro';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedModels />
      <BrandIntro />
      <Footer />
    </>
  );
}
