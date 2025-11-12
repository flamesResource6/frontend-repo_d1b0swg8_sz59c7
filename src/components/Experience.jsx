import { motion } from 'framer-motion'

const timeline = [
  {
    role: 'Principal Frontend Architect',
    company: 'Nebula Labs',
    period: '2022 — Present',
    points: [
      'Led platform migration to microfrontends serving 5M MAU',
      'Defined design tokens + theming across 7 product surfaces',
      'Performance program: -38% TTI, +19% CLS improvements',
    ],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Orion Systems',
    period: '2019 — 2022',
    points: [
      'Built UI kit and motion library used across company apps',
      'Shipped WebGL-powered interactive landing pages',
      'Mentored team on architecture and accessibility',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-transparent via-indigo-950/50 to-transparent" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: .6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Experience
        </motion.h2>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-500/50 via-white/20 to-blue-500/50" />
          <div className="space-y-12">
            {timeline.map((t, idx) => (
              <motion.div
                key={t.role}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: .6, delay: idx * .1 }}
                className={`relative grid md:grid-cols-2 gap-6 items-start ${idx % 2 ? 'md:text-left' : 'md:text-right'}`}
              >
                <div className={`${idx % 2 ? 'md:order-2' : ''}`}>
                  <h3 className="text-white text-xl font-semibold">{t.role}</h3>
                  <p className="text-cyan-100/80">{t.company} • {t.period}</p>
                  <ul className="mt-4 space-y-2 text-cyan-100/80 text-sm">
                    {t.points.map((p) => (<li key={p}>• {p}</li>))}
                  </ul>
                </div>
                <div className={`h-4 w-4 rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-lg shadow-fuchsia-500/30 mx-auto ${idx % 2 ? 'md:order-1' : ''}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
