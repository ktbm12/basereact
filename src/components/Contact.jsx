import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass overflow-hidden rounded-[2rem] border-white/5 grid md:grid-cols-2"
      >
        <div className="p-12 bg-indigo-600">
          <h2 className="text-4xl font-black text-white mb-6">Travaillons <br />ensemble.</h2>
          <p className="text-indigo-100 mb-12 max-w-sm">
            Vous avez un projet ambitieux ? Je suis disponible pour transformer vos idées en réalité numérique.
          </p>
          
          <div className="space-y-6 text-indigo-50">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                📧
              </div>
              <div>
                <p className="text-xs text-indigo-200 uppercase font-bold">Email</p>
                <p className="font-bold">boliventtalla12@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                📞
              </div>
              <div>
                <p className="text-xs text-indigo-200 uppercase font-bold">Téléphone</p>
                <p className="font-bold">+237 691 199 223</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                📍
              </div>
              <div>
                <p className="text-xs text-indigo-200 uppercase font-bold">Localisation</p>
                <p className="font-bold">Bafoussam, Cameroun</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-12 bg-slate-900/50">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-indigo-500 outline-none transition" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-indigo-500 outline-none transition" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-indigo-500 outline-none transition" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
              <textarea rows="4" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-indigo-500 outline-none transition resize-none"></textarea>
            </div>
            <button className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
