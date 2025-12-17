import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

function Home() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default Home;
