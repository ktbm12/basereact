import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchData } from "../api";

const mockServices = [
  {
    title: "Développement Web Full-Stack",
    desc: "Création d'applications web robustes avec Django et React, de la conception à la mise en production.",
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Architecture Backend & API",
    desc: "Conception de systèmes backend scalables, intégrations d'API RESTful et gestion de bases de données complexes.",
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: "Optimisation de Performance",
    desc: "Audit et amélioration des temps de réponse, mise en cache (Redis) et optimisation des requêtes SQL.",
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Déploiement & DevOps",
    desc: "Gestion de l'infrastructure cloud, containérisation avec Docker et automatisation CI/CD.",
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const data = await fetchData("cms/services");
      if (data && data.length > 0) {
        // Map backend data and preserve some default icons if missing
        const formattedData = data.map((s, i) => ({
          title: s.title,
          desc: s.description,
          icon: mockServices[i % mockServices.length].icon // Use cyclical mock icons for now
        }));
        setServices(formattedData);
      } else {
        setServices(mockServices);
      }
    };
    getServices();
  }, []);

  return (
    <section id="services" className="section-container border-t border-slate-900">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Mes <span className="text-indigo-500">Services</span></h2>
        <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-indigo-500/30 transition-colors"
          >
            <div className="shrink-0">{s.icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
