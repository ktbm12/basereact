import { motion } from "framer-motion";

const projects = [
  {
    title: "Eco-Stream SaaS",
    desc: "Real-time carbon footprint monitoring platform for enterprises.",
    tags: ["React", "Django", "PostgreSQL"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Aura AI",
    desc: "Generative AI workspace for creative professionals with cloud rendering.",
    tags: ["Next.js", "Python", "Stripe"],
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Vault Secure",
    desc: "Encrypted asset management system with multi-sig authentication.",
    tags: ["TypeScript", "Rust", "Web3"],
    color: "from-purple-500/20 to-pink-500/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="section-container">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Featured <span className="text-indigo-500">Works</span>
            </h2>
            <p className="text-slate-400 max-w-lg">
              A collection of digital products focused on solving complex problems with elegant code.
            </p>
          </div>
          <button className="hidden md:block text-indigo-400 font-bold hover:underline">
            View Archive →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className={`aspect-video rounded-3xl mb-6 bg-gradient-to-br ${p.color} border border-white/10 overflow-hidden relative`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-sm">
                  <button className="bg-white text-slate-950 px-6 py-2 rounded-full font-bold">
                    View Project
                  </button>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs font-mono text-indigo-300">#{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
