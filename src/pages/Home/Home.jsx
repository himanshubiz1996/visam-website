import React from 'react';

// --- IMPORTS ---
import Hero from '../../components/sections/Hero';
import TrustedBy from '../../components/sections/TrustedBy'; // ✅ ADDED
import Marquee from '../../components/ui/Marquee'; 
import ServicesPreview from '../../components/sections/ServicesPreview';
import WhyChooseUs from '../../components/sections/WhyChooseUs'; // ✅ ADDED
import Process from '../../components/sections/Process';
import Portfolio from '../../components/sections/Portfolio'; 
import Testimonials from '../../components/sections/Testimonials'; 
import FAQ from '../../components/sections/FAQ';
import CTABanner from '../../components/sections/CTABanner';

const Home = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trusted By (Logos) - ✅ NEW */}
      <TrustedBy />

      {/* 3. Scrolling Text */}
      <Marquee />

      {/* 4. Services Grid */}
      <ServicesPreview />

      {/* 5. Why Choose Us (Values) - ✅ NEW */}
      <WhyChooseUs />
      
      {/* 6. Process */}
      <Process />

      {/* 7. Portfolio */}
      <Portfolio />

      {/* 8. Testimonials */}
      <Testimonials />
      
      {/* 9. FAQ */}
      <FAQ />
      
      {/* 10. Final CTA */}
      <CTABanner />
    </>
  );
};

export default Home;