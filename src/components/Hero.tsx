import { Phone, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { COMPANY_PHONE, COMPANY_PHONE_RAW } from "../constants";
import aquecedoresImg from "../asets/aquecedores.png";
import installAqueceImg from "../asets/install_aquece.png";
export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 transform skew-x-12 translate-x-20 z-0 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Instalação em até 24h
            </div>
            
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 font-display">
              Os melhores Aquecedores e Serviço para o <span className="text-orange-500">Conforto e Segurança</span> para sua Família
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Especialistas em aquecedores a gás das melhores marcas. 
              Conforto, economia e segurança para sua família com o melhor atendimento de São Paulo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
              >
                Solicitar Orçamento Grátis
                <ChevronRight size={20} />
              </a>
              <a
                href={`https://wa.me/${COMPANY_PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-orange-500 transition-all"
              >
                Conversar no WhatsApp
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-400">
                    U
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500">
                <span className="font-bold text-slate-900">+1.500 Clientes</span> Satisfeitos
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Lifestyle Image Card */}
            <div className="relative z-10 bg-white p-3 rounded-[2.5rem] shadow-2xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative rounded-[2rem] w-full h-[350px] overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
                  alt="Banho quente e relaxante"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentImageIndex === 0 ? "opacity-100" : "opacity-0"}`}
                  referrerPolicy="no-referrer"
                />
                <img
                  src={aquecedoresImg}
                  alt="Aquecedores Certo"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentImageIndex === 1 ? "opacity-100" : "opacity-0"}`}
                />
                <img
                  src={installAqueceImg}
                  alt="Instalação de Aquecedor"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentImageIndex === 2 ? "opacity-100" : "opacity-0"}`}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 hidden md:block">
                <p className="text-orange-500 font-black text-3xl">Pode confiar.</p>
                <p className="text-slate-600 text-sm">Trabalhamos com as melhores marcas.</p>
              </div>
            </div>


            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-center p-2 transform rotate-12 shadow-lg z-30">
              <span className="text-xs uppercase">Visita Grátis!</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
