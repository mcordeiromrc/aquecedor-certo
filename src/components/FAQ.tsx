import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">
            Central de Dúvidas
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 font-display">
            Perguntas Frequentes
          </h3>
          <p className="text-slate-600">
            Tiramos suas principais dúvidas sobre o funcionamento e cuidados com seu aquecedor a gás.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index ? "border-orange-500 ring-4 ring-orange-50" : "border-slate-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg font-bold ${openIndex === index ? "text-orange-600" : "text-slate-900"}`}>
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full ${openIndex === index ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
