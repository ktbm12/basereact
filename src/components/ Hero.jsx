import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_60%)]"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-6xl md:text-7xl font-extrabold mb-6 tracking-tight"
      >
        Full-Stack Django & React Developer
      </motion.h1>

      <p className="relative text-xl max-w-2xl mb-8 text-gray-300">
        I build secure, scalable and real-time SaaS web applications for companies and startups.
      </p>

      <div className="relative flex space-x-4">
        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl shadow-xl">
          Hire Me
        </button>
        <button className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl">
          Download CV
        </button>
      </div>
    </section>
  );
}
