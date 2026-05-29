import { useState } from "react";
import { Send, Phone, Mail, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_EMAIL, COMPANY_PHONE_1, COMPANY_PHONE_2, COMPANY_PHONE_RAW_1, COMPANY_PHONE_RAW_2 } from "../constants";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/send-email.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Erro ao enviar mensagem");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : "Erro ao enviar mensagem");
    }
  };

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
              Fale Conosco
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 font-display">
              Peça seu Orçamento <span className="text-orange-500">em Minutos</span>
            </h3>
            <p className="text-slate-600 text-lg mb-10">
              Nossa equipe está pronta para te atender. Preencha o formulário e entraremos em contato o mais rápido possível.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500 border border-slate-100">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Telefone / WhatsApp</p>
                  <a href={`https://wa.me/${COMPANY_PHONE_RAW_1}`} target="_blank" rel="noopener noreferrer" className="block text-xl font-bold text-slate-900 hover:text-orange-500 transition-colors">{COMPANY_PHONE_1}</a>
                  <a href={`https://wa.me/${COMPANY_PHONE_RAW_2}`} target="_blank" rel="noopener noreferrer" className="block text-xl font-bold text-slate-900 hover:text-orange-500 transition-colors">{COMPANY_PHONE_2}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500 border border-slate-100">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">E-mail</p>
                  <p className="text-xl font-bold text-slate-900">{COMPANY_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Nome Completo</label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Telefone</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="(11) 99999-9999"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">E-mail</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="exemplo@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Mensagem</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Como podemos te ajudar?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-500 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Solicitação
                      </>
                    )}
                  </button>
                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h4>
                  <p className="text-slate-600">Obrigado pelo contato. Nossa equipe retornará em breve.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
