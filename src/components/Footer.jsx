export default function Footer() {
  return (
    <footer className="py-12 text-center border-t border-white/10 bg-black/40">
      <p className="mb-4 text-gray-400">
        © {new Date().getFullYear()} ktbm.dev — All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="#" className="hover:text-indigo-400">GitHub</a>
        <a href="#" className="hover:text-indigo-400">LinkedIn</a>
        <a href="#" className="hover:text-indigo-400">WhatsApp</a>
        <a href="#" className="hover:text-indigo-400">Email</a>
      </div>
    </footer>
  );
}