import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import MenuSection from '../components/Home/MenuSection';
import GallerySection from '../components/Home/GallerySection';
import ContactSection from '../components/Home/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}