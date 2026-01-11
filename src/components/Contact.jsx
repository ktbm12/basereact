import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-container border-t border-slate-900 bg-slate-950/50">
      <div className="bg-slate-900 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid md:grid-cols-2">
        <div className="p-12 bg-indigo-600">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Travaillons <br />ensemble.</h2>
          <p className="text-indigo-100 mb-12 max-w-sm">
            Vous avez un projet ambitieux ? Je suis disponible pour transformer vos idées en réalité numérique performante.
          </p>
          
          <div className="space-y-8 text-indigo-50">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="break-all">
                <p className="text-[10px] uppercase font-black text-indigo-300 tracking-widest mb-1">Email</p>
                <p className="font-bold text-lg leading-none">boliventtalla12@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-indigo-300 tracking-widest mb-1">Téléphone</p>
                <p className="font-bold text-lg leading-none">+237 691 199 223</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-indigo-300 tracking-widest mb-1">Localisation</p>
                <p className="font-bold text-lg leading-none">Bafoussam, Cameroun</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-12 bg-slate-900">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nom Complet</label>
              <input type="text" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-indigo-500 outline-none transition text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
              <input type="email" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-indigo-500 outline-none transition text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
              <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-indigo-500 outline-none transition resize-none text-white"></textarea>
            </div>
            <button className="w-full py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors">
              Envoyer le Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
