import { motion } from "motion/react";

export default function ProductBrands() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Trabalhamos com as melhores marcas</p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer"
        >
          {/* 
            NOTE TO USER: 
            Abaixo está a imagem que você enviou. 
            Para que ela apareça, você deve salvá-la como 'aquecedores-marcas.webp' 
            (ou .png) na pasta 'public' do projeto.
          */}
          <img 
            src="https://images.unsplash.com/photo-1585129718310-9dd98064971c?auto=format&fit=crop&q=80&w=1600" 
            alt="Linha completa de aquecedores Bosch, Rinnai, Komeco" 
            className="w-full h-auto rounded-[2rem] shadow-2xl group-hover:scale-[1.01] transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none rounded-[2rem]" />
          
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border border-slate-100 flex gap-8 items-center md:flex whitespace-nowrap overflow-hidden max-w-[90%]">
             <span className="text-xs font-black text-slate-300 uppercase tracking-tighter">Bosch</span>
             <span className="text-xs font-black text-slate-300 uppercase tracking-tighter">Rinnai</span>
             <span className="text-xs font-black text-slate-300 uppercase tracking-tighter">Komeco</span>
             <span className="text-xs font-black text-slate-300 uppercase tracking-tighter">Rheem</span>
             <span className="text-xs font-black text-slate-300 uppercase tracking-tighter">Lorenzetti</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
