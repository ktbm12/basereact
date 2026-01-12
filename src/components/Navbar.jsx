import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchData } from "../api";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const getSettings = async () => {
      const data = await fetchData("cms/sitesettings");
      if (data && data.length > 0) {
        setSettings(data[0]);
      }
    };
    getSettings();
  }, []);

  const menuItems = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Compétences", href: "#skills" },
    { name: "Réalisations", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isOpen ? 'bg-slate-950' : 'bg-slate-950/80 backdrop-blur-md'} border-b border-slate-800`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* LOGO */}
        <a href="#home" className="text-xl font-bold text-white tracking-tighter">
          {settings?.site_name ? (
            <>
              {settings.site_name.split('.')[0]}<span className="text-indigo-500">.</span>{settings.site_name.split('.')[1] || "DEV"}
            </>
          ) : (
            <>KTB<span className="text-indigo-500">.</span>DEV</>
          )}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Parlons-en
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-50 bg-slate-950 md:hidden flex flex-col p-6 space-y-6 h-screen overflow-y-auto"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold text-slate-200 hover:text-indigo-500 border-b border-slate-900 pb-4"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-indigo-600 text-center text-white font-bold rounded-xl shadow-lg"
            >
              Me Contacter
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
