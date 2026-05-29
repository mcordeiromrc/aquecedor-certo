import { Flame, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE_1, COMPANY_PHONE_2, COMPANY_PHONE_RAW_1, COMPANY_PHONE_RAW_2 } from "../constants";
import logo from "../assets/logoAquecedor.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                <img src={logo} alt="AquecedorCerto Logo" className="h-16 w-auto" />
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Sua referência em aquecedores a gás em São Paulo. Qualidade, segurança e o melhor banho para sua família.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-orange-500 transition-colors">Serviços</a></li>
              <li><a href="#empresa" className="hover:text-orange-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#faq" className="hover:text-orange-500 transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-orange-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Instalação</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Manutenção</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Conversão de Gás</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Conserto</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Venda de Peças</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-slate-400">

              <li className="flex items-center gap-3">
                <span className="text-orange-500 font-bold">Tel:</span>
                <div className="flex flex-col">
                  <a href={`https://wa.me/${COMPANY_PHONE_RAW_1}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">{COMPANY_PHONE_1}</a>
                  <a href={`https://wa.me/${COMPANY_PHONE_RAW_2}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">{COMPANY_PHONE_2}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500 font-bold">Mail:</span>
                {COMPANY_EMAIL}
              </li>
              <li className="mt-6">
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">Horário de Atendimento</p>
                  <p className="text-sm">Seg a Sex: 08:00 às 18:00</p>
                  <p className="text-sm">Sáb: 08:00 às 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} {COMPANY_NAME}. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-orange-500">Privacidade</a>
            <a href="#" className="hover:text-orange-500">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
