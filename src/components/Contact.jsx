import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-10">Let’s build something powerful together.</p>
      <form className="max-w-xl mx-auto grid gap-4">
        <input
          placeholder="Your name"
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        />
        <input
          placeholder="Email address"
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        />
        <textarea
          placeholder="Your message"
          className="p-4 rounded-xl bg-white/5 border border-white/10 h-32"
        ></textarea>
        <button className="bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl font-semibold">
          Send Message
        </button>
      </form>
    </section>
  );
}
