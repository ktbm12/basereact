import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Développement Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Développement Backend",
    skills: ["Python", "PHP", "Java", "C#", "Django", "Node.js", "FastAPI"]
  },
  {
    category: "DevOps & Real-time",
    skills: ["Docker", "Redis", "Celery", "WebSocket", "Nginx", "PostgreSQL", "MySQL"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container border-t border-slate-900 bg-slate-950/30">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Stack <span className="text-indigo-500">Technique</span></h2>
        <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillsData.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.8)]"></span>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-slate-800 border border-slate-700/50 rounded-lg text-xs font-semibold text-slate-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
