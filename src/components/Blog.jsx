import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchData } from "../api";

const mockPosts = [
  {
    title: "Optimiser les requêtes Django ORM",
    date: "12 Jan 2026",
    excerpt: "Comment réduire le temps de chargement de vos pages en optimisant l architecture des bases de données...",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "React Server Components : Le futur ?",
    date: "08 Jan 2026",
    excerpt: "Analyse approfondie sur l impact des RSC sur l expérience utilisateur et la performance web.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchData("cms/blogs");
      if (data && data.length > 0) {
        const formattedData = data.map(p => ({
          title: p.title,
          date: new Date(p.created).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }),
          excerpt: p.excerpt,
          image: p.cover
        }));
        setPosts(formattedData);
      } else {
        setPosts(mockPosts);
      }
    };
    getPosts();
  }, []);

  return (
    <section id="blog" className="section-container border-t border-slate-900">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Espace <span className="text-indigo-500">Blog</span></h2>
          <p className="text-slate-400">Partage d'expériences et tutoriels sur le développement web.</p>
        </div>
        <button className="hidden md:block text-indigo-500 font-bold hover:underline">
          Lire tous les articles →
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {posts.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-800 shadow-xl">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors"></div>
            </div>
            <p className="text-xs text-indigo-400 font-bold uppercase mb-2">{p.date}</p>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-500 transition-colors">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.excerpt}</p>
            <span className="text-white text-sm font-bold flex items-center gap-2">
              Lire la suite
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
