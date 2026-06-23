import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SKILL_GROUPS } from '../data/skills'

const STATS: [string, string][] = [
  ['4', 'Apps shipped'],
  ['3', 'Full-stack builds'],
  ['∞', 'Cups of coffee'],
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow="About" title="Developer & problem-solver" />
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            I&apos;m a full-stack developer who loves turning ideas into polished, production-ready
            products. My background as a System Administrator means I&apos;m as comfortable wiring up
            cloud infra and CI/CD as I am crafting delightful UIs.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Recently I rebuilt this portfolio plus a banking platform, an online casino, and an IT
            service desk. React and TypeScript up front, NestJS and Postgres on the back, all of it
            deployed on AWS.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {STATS.map(([num, label]) => (
              <div key={label} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-3xl font-bold text-gradient">{num}</div>
                <div className="mt-1 text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="glass rounded-2xl p-5">
                <h3 className="font-display font-semibold text-white">{group.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
