import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Download, Github } from 'lucide-react'
import { RotatingText } from '../components/RotatingText'
import resume from '../assets/George_Garcia_Resume_Software_Engineer.pdf'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function TerminalCard() {
  return (
    <div className="glass animate-float rounded-2xl p-1 shadow-2xl">
      <div className="rounded-xl bg-ink/70 p-5 font-mono text-sm">
        <div className="mb-4 flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>
        <div className="space-y-1 leading-relaxed">
          <div>
            <span className="text-fuchsia-400">const</span>{' '}
            <span className="text-cyan-300">george</span>{' '}
            <span className="text-slate-500">=</span> {'{'}
          </div>
          <div className="pl-4">
            <span className="text-slate-500">role</span>:{' '}
            <span className="text-emerald-300">'Full-Stack Developer'</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-500">stack</span>: [
            <span className="text-emerald-300">'React'</span>,{' '}
            <span className="text-emerald-300">'NestJS'</span>,{' '}
            <span className="text-emerald-300">'AWS'</span>],
          </div>
          <div className="pl-4">
            <span className="text-slate-500">openToWork</span>:{' '}
            <span className="text-fuchsia-400">true</span>,
          </div>
          <div>{'}'}</div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid items-center gap-12 lg:grid-cols-2"
      >
        <div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl"
          >
            Hi, I&apos;m George.
            <br />
            I build <RotatingText words={['full-stack apps', 'sleek UIs', 'cloud systems', 'fun products']} />
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-lg text-slate-400">
            A Full-Stack Developer who builds fast, polished web apps with React, TypeScript, NestJS,
            and AWS. From first pixel to production.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="btn btn-primary px-6 py-3">
              View my work <ArrowRight className="h-4 w-4" />
            </a>
            <a href={resume} download className="btn btn-ghost px-6 py-3">
              <Download className="h-4 w-4" /> Résumé
            </a>
            <a
              href="https://github.com/george-garcia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-4 py-3"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="hidden lg:block">
          <TerminalCard />
        </motion.div>
      </motion.div>
    </section>
  )
}
