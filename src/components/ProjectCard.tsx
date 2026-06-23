import type { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { cn } from '../lib/cn'
import type { Project } from '../data/projects'

function Preview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.heading} preview`}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    )
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-indigo/30 via-accent-fuchsia/20 to-accent-cyan/20">
      <span className="font-display text-3xl font-bold text-white/80">{project.heading}</span>
    </div>
  )
}

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.article
      onMouseMove={onMove}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={cn(
        'group glass relative overflow-hidden rounded-3xl transition-shadow duration-500',
        'hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.45)]',
        featured && 'md:grid md:grid-cols-2',
      )}
    >
      {/* cursor-following glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(217,70,239,0.12), transparent 40%)',
        }}
      />

      <div
        className={cn(
          'relative overflow-hidden',
          featured ? 'min-h-[14rem]' : 'aspect-video border-b border-white/10',
        )}
      >
        <Preview project={project} />
      </div>

      <div className="relative flex flex-col p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-fuchsia">
          {project.subheading}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white">
          {project.heading}
          <span className="text-slate-600">{project.tld}</span>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, featured ? 10 : 6).map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.siteLink && (
            <a
              href={project.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-4 py-2 text-sm"
            >
              Visit <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.adminLink && (
            <a
              href={project.adminLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-4 py-2 text-sm"
            >
              Admin <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <a
            href={project.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost px-4 py-2 text-sm"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        </div>
      </div>
    </motion.article>
  )
}
