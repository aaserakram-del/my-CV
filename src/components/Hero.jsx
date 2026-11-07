import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/site'
import { ArrowRightIcon, DownloadIcon } from './Icons'

export default function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: 'easeOut' },
        }

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* soft background glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.span
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {profile.badge}
          </motion.span>

          <motion.h1
            {...fade(0.1)}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-indigo-600">{profile.name}</span>
            <br />
            {profile.role}
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            {...fade(0.3)}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href={profile.cvUrl} download className="btn-primary w-full sm:w-auto">
              <DownloadIcon width={18} height={18} />
              Download CV
            </a>
            <a href="#projects" className="btn-outline w-full sm:w-auto">
              View Projects
              <ArrowRightIcon width={18} height={18} />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.92 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.7, ease: 'easeOut' },
              })}
          className="order-1 mx-auto lg:order-2"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-400 to-sky-400 opacity-70 blur-md"
              aria-hidden="true"
            />
            <img
              src={profile.photo}
              alt={`${profile.name} portrait`}
              className="relative h-56 w-56 rounded-full border-4 border-white object-cover shadow-lift sm:h-72 sm:w-72 lg:h-96 lg:w-96"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
