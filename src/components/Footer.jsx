export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12">
      <div className="section-container !py-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-xl font-bold text-white tracking-tighter">
              KTB<span className="text-indigo-500">.</span>DEV
            </a>
            <p className="text-slate-500 text-sm mt-3 max-w-xs leading-relaxed">
              Solutions numériques haute performance conçues avec expertise et passion à Bafoussam.
            </p>
          </div>
          
          <div className="flex gap-10">
            <a href="https://github.com/ktbm12" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-400 hover:text-white transition">Github</a>
            <a href="https://wa.me/237691199223" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-400 hover:text-white transition">WhatsApp</a>
            <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition">Contact</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-medium uppercase tracking-widest">
          <p>© {new Date().getFullYear()} KTB.DEV — TOUS DROITS RÉSERVÉS.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition">Confidentialité</a>
            <a href="#" className="hover:text-slate-400 transition">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}