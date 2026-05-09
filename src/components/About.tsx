import { CheckCircle2, Shield, Users, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const highlights = [
    {
      title: "Segurança Total",
      desc: "Técnicos certificados seguindo rigorosamente as normas NBR.",
      icon: Shield,
    },
    {
      title: "Atendimento Ágil",
      desc: "Equipes prontas para atender chamados de urgência no mesmo dia.",
      icon: Clock,
    },
    {
      title: "Preço Justo",
      desc: "Transparência total e orçamentos sem compromisso.",
      icon: CheckCircle2,
    },
    {
      title: "Equipe Especializada",
      desc: "Anos de experiência com as maiores marcas do mercado mundial.",
      icon: Users,
    },
  ];

  return (
    <section id="empresa" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
              Por que nos escolher?
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight font-display">
              Qualidade e Segurança que <span className="text-orange-500">sua Família merece.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              A AquecedorCerto nasceu com o propósito de transformar o banho dos brasileiros em uma experiência de hotel. Combinamos tecnologia de ponta com um atendimento humano e especializado.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-orange-500">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517646287270-a5a5cfda01c1?auto=format&fit=crop&q=80&w=1200"
                alt="Equipe técnica qualificada"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
            
            <div className="absolute top-1/2 -left-10 bg-orange-500 p-8 rounded-3xl shadow-xl hidden xl:block">
              <p className="text-5xl font-black mb-1">+10</p>
              <p className="text-sm font-bold uppercase tracking-wider">Anos de Experiência</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
