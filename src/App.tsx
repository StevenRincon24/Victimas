import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Institutions from './components/Institutions';
import ServiceMap from './components/ServiceMap';
import Documents from './components/Documents';
import News from './components/News';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (currentSection) {
      case 'inicio':
        return <Hero onSectionChange={setCurrentSection} />;
      case 'servicios':
        return <Services />;
      case 'instituciones':
        return <Institutions />;
      case 'mapa':
        return <ServiceMap />;
      case 'documentos':
        return <Documents />;
      case 'noticias':
        return <News />;
      case 'testimonios':
        return <Testimonials />;
      case 'preguntas':
        return <FAQ />;
      case 'contacto':
        return <Contact />;
      default:
        return <Hero onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;