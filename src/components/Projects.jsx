import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const sampleProjects = [
  {
    title: 'Neon Nexus UI Kit',
    description: 'A responsive, themeable UI system with game-like microinteractions and 3D flourishes.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Level-Up Dashboard',
    description: 'Gamified analytics dashboard with achievements, progress bars, and animated charts.',
    tags: ['React', 'D3', 'State Machines'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Quest Builder',
    description: 'A visual flow editor for user journeys, using draggable nodes and real-time preview.',
    tags: ['React', 'Zustand', 'React Flow'],
    live: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/60 to-transparent" />
        <div className="pointer-events-none select-none absolute -inset-24 blur-3xl opacity-20" style={{
          background:
            'radial-gradient(400px 200px at 10% 30%, rgba(168, 85, 247, 0.35), transparent 60%), radial-gradient(500px 250px at 90% 30%, rgba(59, 130, 246, 0.35), transparent 60%), radial-gradient(500px 250px at 50% 90%, rgba(99, 102, 241, 0.35), transparent 60%)'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: .6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Selected Projects
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
