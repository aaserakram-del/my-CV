// Add or remove skills here. `short` is the badge text, `tone` picks the colour.
// Tone classes are written in full so Tailwind can detect them.

export const toneClasses = {
  orange: 'bg-orange-50 text-orange-600 ring-orange-100',
  blue: 'bg-blue-50 text-blue-600 ring-blue-100',
  yellow: 'bg-yellow-50 text-yellow-700 ring-yellow-100',
  cyan: 'bg-cyan-50 text-cyan-600 ring-cyan-100',
  teal: 'bg-teal-50 text-teal-600 ring-teal-100',
  violet: 'bg-violet-50 text-violet-600 ring-violet-100',
  rose: 'bg-rose-50 text-rose-600 ring-rose-100',
  slate: 'bg-slate-100 text-slate-700 ring-slate-200',
}

export const skills = [
  { name: 'HTML', short: 'H5', tone: 'orange', description: 'Semantic, accessible markup' },
  { name: 'CSS', short: 'C3', tone: 'blue', description: 'Flexbox, Grid and animations' },
  { name: 'JavaScript', short: 'JS', tone: 'yellow', description: 'Modern ES6+ fundamentals' },
  { name: 'React.js', short: 'Re', tone: 'cyan', description: 'Components, hooks and state' },
  { name: 'Tailwind CSS', short: 'Tw', tone: 'teal', description: 'Utility-first styling' },
  { name: 'Responsive Design', short: 'Rd', tone: 'violet', description: 'Mobile-first layouts' },
  { name: 'Axios', short: 'Ax', tone: 'violet', description: 'HTTP requests and interceptors' },
  { name: 'REST API', short: 'Api', tone: 'rose', description: 'Consuming and handling APIs' },
  { name: 'React Router', short: 'Rr', tone: 'rose', description: 'Client-side routing' },
  { name: 'Git & GitHub', short: 'Git', tone: 'slate', description: 'Version control and collaboration' },
]
