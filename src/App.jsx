import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-indigo-900 text-white">
      <Navbar />
      <Hero />
    </div>
  );
}
