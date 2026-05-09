import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../constants";

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            A Satisfação de quem <span className="text-orange-500">Confia</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="text-orange-400 mb-6 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 text-slate-100 w-12 h-12" />
                  <p className="relative z-10 text-slate-600 italic leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cliente Verificado</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
