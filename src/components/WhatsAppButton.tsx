import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { COMPANY_PHONE_RAW } from "../constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${COMPANY_PHONE_RAW}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      title="Falar no WhatsApp"
    >
      <div className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-lg font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Precisa de ajuda? Fale conosco!
      </div>
      <MessageCircle size={32} fill="white" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center font-bold">1</span>
      </span>
    </motion.a>
  );
}
