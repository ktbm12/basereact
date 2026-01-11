import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="projects"
      className="py-24 text-center bg-black/30"
    >
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {["E-learning Platform", "Auction System", "Business Manager"].map((p) => (
          <div key={p} className="p-6 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl hover:scale-105 transition">
            {p}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
