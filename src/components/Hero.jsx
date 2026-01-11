import { motion } from "framer-motion";
import profilePhoto from "../assets/photo.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Disponible pour de nouveaux projets</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white tracking-tight">
            Développeur <br />
            <span className="text-indigo-500">Full-Stack.</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
            Je conçois des solutions digitales performantes et évolutives pour les entreprises et startups. Spécialiste <span className="text-white">Django</span> & <span className="text-white">React</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Voir mon travail
            </a>
            <a href="#contact" className="btn-secondary">
              Me contacter
            </a>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute -inset-1 bg-indigo-500/20 rounded-[3rem] blur-xl"></div>
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
              <img 
                src={profilePhoto} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Simple experience tag */}
            <div className="absolute -right-4 bottom-10 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl shadow-xl">
               <p className="text-xs font-bold text-slate-400 uppercase">Expérience</p>
               <p className="text-lg font-bold text-white">5+ Ans</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
