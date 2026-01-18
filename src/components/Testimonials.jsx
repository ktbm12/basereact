export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      const data = await fetchData("cms/testimonials");
      if (data && data.length > 0) {
        const formattedData = data.map(t => ({
          name: t.name,
          role: t.company,
          content: t.message,
          avatar: t.photo || `https://i.pravatar.cc/150?u=${t.name}`
        }));
        setTestimonials(formattedData);
      } else {
        setTestimonials(mockTestimonials);
      }
    };
    getTestimonials();
  }, []);

  return (
    <section id="testimonials" className="section-container border-t border-slate-900 bg-slate-950/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Avis <span className="text-indigo-500">Clients</span></h2>
        <p className="text-slate-400">Ce que mes partenaires disent de mon travail.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-slate-900 border border-slate-800 rounded-2xl relative"
          >
            <div className="text-indigo-500 mb-6 text-4xl font-serif">“</div>
            <p className="text-slate-300 italic mb-8 leading-relaxed">
              {t.content}
            </p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all object-cover" />
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-xs text-slate-500 uppercase font-bold">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
