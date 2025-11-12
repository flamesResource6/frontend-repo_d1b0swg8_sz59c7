import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950 to-black opacity-90" />
        <div className="absolute -inset-24 blur-3xl opacity-30" style={{
          background:
            'radial-gradient(600px 300px at 20% 20%, rgba(168, 85, 247, 0.35), transparent 60%), radial-gradient(500px 250px at 80% 30%, rgba(59, 130, 246, 0.35), transparent 60%), radial-gradient(500px 250px at 50% 80%, rgba(99, 102, 241, 0.35), transparent 60%)'
        }} />
      </div>

      <div className="absolute left-0 right-0 top-0 h-[60vh] opacity-60 pointer-events-none">
        <Spline scene="https://prod.spline.design/8z7q0Y2wJf6C1P3J/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-cyan-200/90">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Open to opportunities
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Architecting immersive frontends with a gaming flair
          </h1>
          <p className="mt-4 text-cyan-100/80 text-lg max-w-xl mx-auto lg:mx-0">
            I design and build scalable, accessible, and delightful web experiences with a love for 3D, motion, and playful interactions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#projects" className="px-6 py-3 rounded-md bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition">View Projects</a>
            <a href="#contact" className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">Contact</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-10 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-blue-500/10 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6">
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
              <Spline scene="https://prod.spline.design/fUi1cQp0p3pRM4W1/scene.splinecode" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
