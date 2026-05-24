import { Wrench, ShieldCheck, Flame, ShoppingCart, Settings, CheckCircle, Fuel, Droplets, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES } from "../constants";

const iconMap = {
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Flame: Flame,
  ShoppingCart: ShoppingCart,
  Settings: Settings,
  CheckCircle: CheckCircle,
  Fuel: Fuel,
  Droplets: Droplets,
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">
            Nossas Especialidades
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display">
            Soluções Completas para Sua Casa
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para garantir que você nunca fique sem água quente. Segurança e eficiência em primeiro lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-orange-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais <ChevronRight size={14} className="ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
