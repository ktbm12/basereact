export default function Footer() {
  return (
    <footer className="border-t border-white/5 pb-12 pt-12">
      <div className="section-container !py-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              KTB.DEV
            </span>
            <p className="text-slate-500 text-sm mt-2 max-w-xs">
              Conception de solutions numériques haute performance avec une attention particulière à l'esthétique.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="https://github.com/ktbm12" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">Github</a>
            <a href="#" className="text-slate-400 hover:text-white transition">LinkedIn</a>
            <a href="https://wa.me/237691199223" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">WhatsApp</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} KTB.DEV — Bafoussam, Cameroun. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}