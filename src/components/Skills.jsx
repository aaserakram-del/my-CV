import { skills, toneClasses } from '../data/skills'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="The tools and concepts I use to build modern, responsive web interfaces."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <li key={skill.name}>
              <Reveal delay={(index % 3) * 0.08} className="h-full">
                <div className="group flex h-full items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lift">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold ring-1 ${
                      toneClasses[skill.tone] ?? toneClasses.slate
                    }`}
                    aria-hidden="true"
                  >
                    {skill.short}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                    {skill.description && (
                      <p className="text-sm text-slate-500">{skill.description}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
