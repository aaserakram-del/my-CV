import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of projects where I practice and apply what I learn."
        />

        {projects.length === 0 ? (
          <p className="text-center text-slate-500">
            Projects are coming soon. Add one in <code>src/data/projects.js</code>.
          </p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <li key={project.title}>
                <Reveal delay={(index % 3) * 0.1} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
