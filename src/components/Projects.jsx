import { motion } from "framer-motion";
import braidingImg from "../assets/Capture d’écran du 2026-01-11 08-15-41.png";
import fuchsImg from "../assets/Capture d’écran du 2026-01-11 08-24-31.png";

const projectList = [
  {
    title: "Black Braiding Palace",
    category: "E-Commerce",
    image: braidingImg,
    desc: "Plateforme complète de services de coiffure et vente de produits. Design épuré et système de réservation.",
    tech: ["React", "CSS", "UI/UX"],
    link: "https://blackbraidingpalace.onrender.com/"
  },
  {
    title: "Institut der Fuchs",
    category: "Education",
    image: fuchsImg,
    desc: "Site institutionnel pour l'apprentissage et la formation. Interface bilingue et gestion de contenu avancée.",
    tech: ["Web Design", "Professional Service"],
    link: "https://institutderfuchs.de"
  },
  {
    title: "CloudVault Enterprise",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1558494949-ef010978b8a4?q=80&w=600&auto=format&fit=crop",
    desc: "Système de stockage ultra-sécurisé pour entreprises. Chiffrement de bout en bout et haute disponibilité.",
    tech: ["Node.js", "Docker", "AWS"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container border-t border-slate-900 bg-slate-950">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Mes <span className="text-indigo-500">Réalisations</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 rounded-full mb-6"></div>
        <p className="text-slate-400 max-w-xl text-lg">
          Une sélection de mes travaux récents alliant design impactant et solidité technique.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group block"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-slate-800 shadow-xl transition-shadow group-hover:shadow-indigo-500/10">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/0 transition-colors"></div>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 right-6 w-12 h-12 bg-white text-slate-950 rounded-full flex items-center justify-center shadow-xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <p className="text-indigo-500 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
            <h3 className="text-2xl font-bold mb-4 text-white hover:text-indigo-500 transition-colors cursor-pointer">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {project.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
