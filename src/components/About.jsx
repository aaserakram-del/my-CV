import { profile } from '../data/site'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  // Stats update automatically when you edit skills.js / projects.js.
  const stats = [
    { value: skills.length, label: 'Skills' },
    { value: projects.length, label: projects.length === 1 ? 'Project' : 'Projects' },
    { value: '1st', label: 'Year student' },
  ]

  return (
    <section id="about" className="section bg-slate-50">
      <div className="container-page">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-5">
          <Reveal className="space-y-4 text-base leading-relaxed text-slate-600 md:col-span-3 sm:text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <dl className="grid grid-cols-3 gap-3 md:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-soft md:text-left"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-3xl font-extrabold text-indigo-600">
                      {stat.value}
                    </span>
                    <span className="text-sm text-slate-500">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
