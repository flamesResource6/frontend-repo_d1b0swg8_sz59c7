import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: .6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Let’s build something legendary
        </motion.h2>
        <p className="mt-4 text-cyan-100/80 max-w-2xl mx-auto">
          Have a role, project, or collaboration in mind? I’d love to hear about it.
        </p>
        <div className="mt-8">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  )
}
