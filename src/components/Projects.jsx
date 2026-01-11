import { motion } from "framer-motion";

const projectList = [
  {
    title: "Eco-System SaaS Platform",
    category: "Full-Stack Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    desc: "A comprehensive dashboard for monitoring renewable energy consumption across multiple industrial sites.",
    tech: ["Django", "React", "Chart.js", "Redis"],
    link: "#"
  },
  {
    title: "AI Market Analyzer",
    category: "Machine Learning / Product",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    desc: "Predictive analytics tool for crypto markets using sentiment analysis and historical data patterns.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    link: "#"
  },
  {
    title: "CloudVault Pro",
    category: "Cybersecurity / Infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010978b8a4?q=80&w=1000&auto=format&fit=crop",
    desc: "Enterprise-grade encrypted storage solution with multi-region replication and audit logging.",
    tech: ["Node.js", "AWS S3", "Docker", "Nginx"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Selected <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg">
            A demonstration of technical expertise across various domains, 
            focusing on performance and tangible business impact.
          </p>
        </div>
        <div className="flex gap-4">
           {/* Navigation buttons or counters could go here */}
           <div className="px-6 py-3 border border-white/10 rounded-full font-mono text-sm">
             Total Projects / 12
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 border border-white/5 glass shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase border border-white/10">
                        {t}
                      </span>
                    ))}
                 </div>
              </div>

              <motion.a 
                href={project.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 w-12 h-12 bg-white text-slate-950 rounded-full flex items-center justify-center shadow-xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>

            <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {project.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
