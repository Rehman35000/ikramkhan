import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeServices from '@/components/HomeServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedProjects from '@/components/FeaturedProjects';
import Testimonials from '@/components/Testimonials';
import TrustedBy from '@/components/TrustedBy';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeServices />
        <TrustedBy />
        <FeaturedProjects />
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
