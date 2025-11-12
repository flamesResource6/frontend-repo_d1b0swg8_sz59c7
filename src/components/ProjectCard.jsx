import { motion } from 'framer-motion'
import { Github, Globe } from 'lucide-react'

export default function ProjectCard({ title, description, tags = [], image, live, repo }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-sm text-cyan-100/80 leading-relaxed">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-black/50 border border-white/10 text-cyan-100/80">{t}</span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3">
          {live && (
            <a href={live} target="_blank" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 text-white hover:bg-white/10">
              <Globe className="h-4 w-4" /> Live
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 text-white hover:bg-white/10">
              <Github className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
