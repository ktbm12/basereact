import { useEffect, useState } from "react";
import { fetchData } from "../api";

export default function Footer() {
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

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12">
      <div className="section-container !py-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-xl font-bold text-white tracking-tighter">
              {settings?.site_name ? (
                <>
                  {settings.site_name.split('.')[0]}<span className="text-indigo-500">.</span>{settings.site_name.split('.')[1] || "DEV"}
                </>
              ) : (
                <>KTB<span className="text-indigo-500">.</span>DEV</>
              )}
            </a>
            <p className="text-slate-500 text-sm mt-3 max-w-xs leading-relaxed">
              Solutions numériques haute performance conçues avec expertise et passion à {settings?.address || "Bafoussam"}.
            </p>
          </div>
          
          <div className="flex gap-10">
            <a href={settings?.github || "https://github.com/ktbm12"} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-400 hover:text-white transition">Github</a>
            <a href={settings?.whatsapp ? `https://wa.me/${settings.whatsapp.replace(/\+/g, '')}` : "https://wa.me/237691199223"} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-400 hover:text-white transition">WhatsApp</a>
            <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition">Contact</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-medium uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {settings?.site_name || "KTB.DEV"} — TOUS DROITS RÉSERVÉS.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition">Confidentialité</a>
            <a href="#" className="hover:text-slate-400 transition">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}