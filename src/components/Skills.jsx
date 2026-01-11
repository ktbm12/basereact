import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="skills"
      className="py-24 text-center"
    >
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {["Django / DRF", "React / Next.js", "PostgreSQL"].map((s) => (
          <div key={s} className="p-6 bg-white/5 rounded-2xl hover:scale-105 transition">
            {s}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
