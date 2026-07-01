import { Github, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} George Garcia</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/george-garcia"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="mailto:jorge.a.garcia12@gmail.com"
            className="transition-colors hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p>Built with React, TypeScript, Tailwind &amp; Framer Motion</p>
      </div>
    </footer>
  )
}
