import { motion } from 'framer-motion'
export default function App(){return(<div className='min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-900 text-white'><section className='relative h-screen flex flex-col justify-center items-center text-center overflow-hidden'>
<div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_60%)]'></div>
<motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} className='relative text-6xl md:text-7xl font-extrabold mb-6 tracking-tight'>Full-Stack Django & React Developer</motion.h1>
<p className='relative text-xl max-w-2xl mb-8 text-gray-300'>I build secure, scalable and real-time SaaS web applications for companies and startups.</p>
<div className='relative flex space-x-4'>
<button className='px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl shadow-xl'>Hire Me</button>
<button className='px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl'>Download CV</button>
</div>
</section></div>)}

// Navbar Component
export function Navbar(){return(<nav className='fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10'><div className='max-w-7xl mx-auto flex justify-between items-center p-4'><span className='font-bold'>ktbm.dev</span><div className='space-x-6 hidden md:block'><a href='#skills'>Skills</a><a href='#projects'>Projects</a><a href='#contact'>Contact</a></div></div></nav>)}

// Skills Section
export function Skills(){return(<section id='skills' className='py-24 text-center'><h2 className='text-4xl font-bold mb-10'>Skills</h2><div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'><div className='p-6 bg-white/5 rounded-2xl'>Django / DRF</div><div className='p-6 bg-white/5 rounded-2xl'>React / Next.js</div><div className='p-6 bg-white/5 rounded-2xl'>PostgreSQL</div></div></section>)}

// Projects Section
export function Projects(){return(<section id='projects' className='py-24 text-center bg-black/30'><h2 className='text-4xl font-bold mb-10'>Projects</h2><div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'><div className='p-6 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl'>E-learning Platform</div><div className='p-6 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl'>Auction System</div><div className='p-6 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl'>Business Manager</div></div></section>)}

// Contact Section
export function Contact(){return(<section id='contact' className='py-24 text-center'><h2 className='text-4xl font-bold mb-6'>Contact Me</h2><p className='text-gray-300 mb-10'>Let’s build something powerful together.</p><form className='max-w-xl mx-auto grid gap-4'><input placeholder='Your name' className='p-4 rounded-xl bg-white/5 border border-white/10'/><input placeholder='Email address' className='p-4 rounded-xl bg-white/5 border border-white/10'/><textarea placeholder='Your message' className='p-4 rounded-xl bg-white/5 border border-white/10 h-32'></textarea><button className='bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl font-semibold'>Send Message</button></form></section>)}


// Footer Section
export function Footer(){return(<footer className='py-12 text-center border-t border-white/10 bg-black/40'><p className='mb-4 text-gray-400'>© {new Date().getFullYear()} ktbm.dev — All rights reserved.</p><div className='flex justify-center space-x-6 text-2xl'><a href='#' className='hover:text-indigo-400'>GitHub</a><a href='#' className='hover:text-indigo-400'>LinkedIn</a><a href='#' className='hover:text-indigo-400'>WhatsApp</a><a href='#' className='hover:text-indigo-400'>Email</a></div></footer>)}