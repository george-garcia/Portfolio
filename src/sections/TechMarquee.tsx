import { TECH_MARQUEE } from '../data/skills'

const doubled = [...TECH_MARQUEE, ...TECH_MARQUEE]

export function TechMarquee() {
  return (
    <section className="relative overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-4">
        {doubled.map((tech, i) => (
          <span key={`a-${i}`} className="chip whitespace-nowrap px-5 py-2 text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex w-max animate-marquee-reverse gap-4">
        {doubled.map((tech, i) => (
          <span key={`b-${i}`} className="chip whitespace-nowrap px-5 py-2 text-sm">
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
