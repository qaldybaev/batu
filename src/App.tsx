import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/About';
import Menu from './components/Menu';
import OnlineOrder from './components/OnlineOrder';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <Header />
        <Hero />
        {/* <About /> */}
        <Menu />
        <OnlineOrder />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;