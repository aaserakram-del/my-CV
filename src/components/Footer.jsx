import { profile } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8">
      <div className="container-page text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
      </div>
    </footer>
  )
}
