import { motion } from "framer-motion";

const skills = [
  { name: "Frontend", tools: ["React", "Next.js", "Tailwind CSS", "TypeScript"], icon: "🎨" },
  { name: "Backend", tools: ["Django", "Python", "Node.js", "PostgreSQL"], icon: "⚙️" },
  { name: "Infrastructure", tools: ["Docker", "AWS", "Nginx", "CI/CD"], icon: "🚀" }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-center">
          Superpowers & <span className="text-indigo-500">Stacks</span>
        </h2>
        <div className="h-1.5 w-20 bg-indigo-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-3xl group glass-hover"
          >
            <div className="text-4xl mb-6">{skill.icon}</div>
            <h3 className="text-2xl font-bold mb-6 group-hover:text-indigo-400 transition-colors">
              {skill.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.tools.map(tool => (
                <span key={tool} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-sm text-slate-400">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
