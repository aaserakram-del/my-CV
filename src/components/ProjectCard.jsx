import { ExternalIcon, GithubIcon } from './Icons'

const FALLBACK_IMAGE = '/projects/placeholder.svg'

export default function ProjectCard({ project }) {
  const { title, description, image, technologies = [], githubLink, liveDemo } = project

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={image || FALLBACK_IMAGE}
          alt={`${title} preview`}
          loading="lazy"
          onError={(e) => {
            // Avoid an infinite loop if the fallback itself is missing.
            if (!e.currentTarget.src.endsWith(FALLBACK_IMAGE)) {
              e.currentTarget.src = FALLBACK_IMAGE
            }
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>

        {technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {(githubLink || liveDemo) && (
          <div className="mt-6 flex gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 !px-4 !py-2.5"
              >
                <GithubIcon width={16} height={16} />
                Code
              </a>
            )}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 !px-4 !py-2.5"
              >
                <ExternalIcon width={16} height={16} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
