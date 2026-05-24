import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import { COMPANY_PHONE_RAW } from "../constants";
import aquecedoresImg from "../assets/aquecedores.png";
import installAqueceImg from "../assets/install_aquece.png";
import gasistaServicoImg from "../assets/gasista-servico1.jpg";
import bombasImg from "../assets/bombas-e-pressurizadores-ok.jpeg";

const SLIDE_COUNT = 5;

const contentAquecedor = {
  id: "aquecedor",
  badge: "Instalação em até 24h",
  title: (
    <>
      Aquecedores a Gás:{" "}
      <span className="text-orange-500">Conforto e Segurança</span>{" "}
      para Sua Família
    </>
  ),
  description:
    "Somos especialistas em instalação e manutenção de aquecedores a gás. Trabalhamos com as melhores marcas — Bosch, Rinnai, Komeco — garantindo eficiência, durabilidade e segurança. Conte com nossa equipe certificada para um serviço ágil e profissional.",
};

const contentGas = {
  id: "gas",
  badge: "Responsabilidade Técnica",
  title: (
    <>
      Redes de Gás com{" "}
      <span className="text-orange-500">Responsabilidade Técnica</span>
    </>
  ),
  description:
    "Projetos, instalação e manutenção de sistemas de gás residenciais e comerciais seguindo as normas NBR 13103/15526. Garantia de segurança, economia e tranquilidade para seu imóvel.",
};

const contentBombas = {
  id: "bombas",
  badge: "Pressão Ideal",
  title: (
    <>
      Bombas e Pressurizadores:{" "}
      <span className="text-orange-500">Pressão Ideal</span> em Toda a Casa
    </>
  ),
  description:
    "Manutenção de qualidade para o sistema de bombeamento do seu condomínio!",
};

const slides = [
  { image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200", alt: "Banho quente e relaxante", content: contentAquecedor, referrer: true },
  { image: aquecedoresImg, alt: "Aquecedores Certo", content: contentAquecedor, referrer: false },
  { image: installAqueceImg, alt: "Instalação de Aquecedor", content: contentAquecedor, referrer: false },
  { image: gasistaServicoImg, alt: "Gasista Serviço", content: contentGas, referrer: false },
  { image: bombasImg, alt: "Bombas e Pressurizadores", content: contentBombas, referrer: false },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const prevIndex = currentIndex === 0 ? SLIDE_COUNT - 1 : currentIndex - 1;
    const isNewContent = slides[currentIndex].content.id !== slides[prevIndex].content.id;
    const delay = isNewContent ? 8000 : 4000;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev === SLIDE_COUNT - 1 ? 0 : prev + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const slide = slides[currentIndex];
  const content = slide.content;

  const dots = useMemo(
    () =>
      slides.reduce((acc, s, i) => {
        const id = s.content.id;
        if (!acc.length || acc[acc.length - 1].id !== id) {
          acc.push({ id, index: i });
        }
        return acc;
      }, [] as { id: string; index: number }[]),
    []
  );

  const currentDotIndex = dots.findIndex(
    (d) => d.id === content.id
  );

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
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
              {content.badge}
            </div>

            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 font-display">
                {content.title}
              </h1>

              <p className="text-lg text-slate-600 mb-8 max-w-lg">
                {content.description}
              </p>
            </motion.div>

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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-orange-500 transition-all"
              >
                Conversar no WhatsApp
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-400"
                  >
                    U
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500">
                <span className="font-bold text-slate-900">+1.500 Clientes</span>{" "}
                Satisfeitos
              </p>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {dots.map((dot) => (
                <button
                  key={dot.id}
                  onClick={() => setCurrentIndex(dot.index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    dot.id === content.id
                      ? "w-8 bg-orange-500"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Slide ${dot.id}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-3 rounded-[2.5rem] shadow-2xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative rounded-[2rem] w-full h-[350px] overflow-hidden bg-slate-100">
                {slides.map((s, i) => (
                  <img
                    key={i}
                    src={s.image}
                    alt={s.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      i === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                    {...(s.referrer ? { referrerPolicy: "no-referrer" as const } : {})}
                  />
                ))}
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 hidden md:block">
                <p className="text-orange-500 font-black text-3xl">
                  Pode confiar.
                </p>
                <p className="text-slate-600 text-sm">
                  Trabalhamos com as melhores marcas.
                </p>
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
