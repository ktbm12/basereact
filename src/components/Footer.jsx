export default function Footer() {
  return (
    <footer className="border-t border-white/5 pb-12 pt-12">
      <div className="section-container !py-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              KB.DEV
            </span>
            <p className="text-slate-500 text-sm mt-2 max-w-xs">
              Crafting high-quality digital products with focus on aesthetics and performance.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-white transition">Github</a>
            <a href="#" className="text-slate-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-white transition">Dribbble</a>
            <a href="#" className="text-slate-400 hover:text-white transition">WhatsApp</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} KB.DEV. All rights reserved.
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