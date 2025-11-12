import { motion } from 'framer-motion'
import { Cpu, Braces, Boxes, Layout, Accessibility, Rocket } from 'lucide-react'

const skills = [
  { icon: Cpu, label: 'Architecture', desc: 'Design systems, microfrontends, performance, SSR/SSG' },
  { icon: Braces, label: 'Core Web', desc: 'React, TypeScript, Web Components, WebGL/Three.js' },
  { icon: Boxes, label: 'State & Data', desc: 'Zustand, Redux, State Machines, GraphQL/REST' },
  { icon: Layout, label: 'UI/UX', desc: 'Accessibility, theming, motion, design tokens' },
  { icon: Accessibility, label: 'Quality', desc: 'Testing, a11y audits, lighthouse, CI/CD' },
  { icon: Rocket, label: 'Leadership', desc: 'Roadmaps, mentorship, cross-team collaboration' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: .6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Core Skills
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, label, desc }) => (
            <motion.div
              key={label}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-blue-500 text-white shadow-lg shadow-fuchsia-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{label}</h3>
              <p className="mt-2 text-cyan-100/80 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
