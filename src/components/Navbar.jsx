export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold">ktbm.dev</span>
        <div className="space-x-6 hidden md:block">
          <a href="#skills" className="hover:text-indigo-400">Skills</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
