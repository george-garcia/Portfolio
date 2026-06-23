import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          subtitle="Full-stack products I designed, built, and deployed end-to-end."
        />
      </Reveal>

      <div className="mt-12 space-y-6">
        {featured.map((project, i) => (
          <Reveal key={project.heading} delay={i * 0.05}>
            <ProjectCard project={project} featured />
          </Reveal>
        ))}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.heading} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
