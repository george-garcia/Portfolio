export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} George Garcia</p>
        <p>Built with React, TypeScript, Tailwind &amp; Framer Motion</p>
      </div>
    </footer>
  )
}
