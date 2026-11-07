import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-slate-600">{subtitle}</p>}
    </Reveal>
  )
}
