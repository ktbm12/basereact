import { motion } from "framer-motion";
import profilePhoto from "../assets/photo.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center text-left">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] uppercase tracking-widest font-bold text-indigo-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Available for new opportunities</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
            Full-Stack <br />
            <span className="gradient-text">Architect.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-lg mb-12 leading-relaxed">
            I transform complex technical requirements into <span className="text-white">stunning digital products</span>. Specializing in high-scale enterprise systems and fluid interfaces.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-primary">
              Me Contacter
            </button>
            <div className="flex gap-4 ml-4">
              <a href="https://github.com/ktbm12" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-indigo-400 transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="p-3 glass rounded-xl hover:text-blue-400 transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative flex justify-center lg:justify-end"
        >
          {/* Main Image Frame */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[3.5rem] blur-2xl"></div>
            
            <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src={profilePhoto} 
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
            </div>

            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="absolute -right-8 top-1/4 glass p-4 rounded-2xl border border-white/20 shadow-xl"
            >
              <p className="text-[10px] font-bold text-slate-400 uppercase">Experience</p>
              <p className="text-lg font-black text-white">5+ Years</p>
            </motion.div>

            <motion.div 
               animate={{ x: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 4 }}
               className="absolute -left-12 bottom-1/4 glass p-4 rounded-2xl border border-white/20 shadow-xl text-center"
            >
              <div className="flex gap-1 mb-1 justify-center">
                 {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-500 text-[8px]">★</span>)}
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Rating</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
