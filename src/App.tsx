/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductBrands from "./components/ProductBrands";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <ProductBrands />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Map />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
