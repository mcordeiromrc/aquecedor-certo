export default function Map() {
  return (
    <section className="h-[450px] w-full relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14624.475631109!2d-46.6669962!3d-23.5937172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a21e491295b%3A0xc367db91291b5c3b!2sIbirapuera%20Park!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Empresa"
      ></iframe>
      <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block">
        <p className="font-bold text-slate-800">Nosso Escritório</p>
        <p className="text-xs text-slate-500">São Paulo, Brasil</p>
      </div>
    </section>
  );
}
