import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import ToolsUsed from '../components/ToolsUsed';
import CTAForm from '../components/CTAForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToolsUsed />
      <Features />
      <Benefits />
      <Process />
   
      <CTAForm />
      <Footer/>
    </>
  );
}
