import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Dev",
    icon: "✨",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend & Systems",
    icon: "⚙️",
    skills: ["PHP", "Java", "C#", "Django", "PHP Signals", "Redis", "Celery"]
  },
  {
    category: "Real-time & Data",
    icon: "⚡",
    skills: ["WebSocket", "REST API", "PostgreSQL", "MySQL", "Docker", "Nginx"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container relative overflow-hidden">
      <div className="flex flex-col items-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-center">
          Stack <span className="gradient-text">Technique</span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl text-lg">
          Un large éventail de technologies maîtrisées pour concevoir des solutions robustes et évolutives.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {skillsData.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-[2rem] border border-white/5 group hover:border-indigo-500/30 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
              {group.icon}
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-slate-900/50 border border-white/5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:border-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
