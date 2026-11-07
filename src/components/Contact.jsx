import { profile } from '../data/site'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Contact() {
  const channels = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: MailIcon,
      external: false,
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
      Icon: PhoneIcon,
      external: false,
    },
    {
      label: 'GitHub',
      value: profile.github.replace(/^https?:\/\/(www\.)?/, ''),
      href: profile.github,
      Icon: GithubIcon,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      href: profile.linkedin,
      Icon: LinkedinIcon,
      external: true,
    },
  ]

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="I'm looking for an internship opportunity. Feel free to reach out — I'd love to hear from you."
        />

        <ul className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          {channels.map(({ label, value, href, Icon, external }, index) => (
            <li key={label}>
              <Reveal delay={index * 0.08} className="h-full">
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-soft transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon />
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{label}</h3>
                  <p className="mt-1 break-all text-sm text-slate-500">{value}</p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <MailIcon width={18} height={18} />
            Say Hello
          </a>
        </Reveal>
      </div>
    </section>
  )
}
