import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { site } from '@/lib/site'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const iconLinkClass =
  'inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#top" className="flex items-center gap-2.5 font-medium">
          <span className="flex size-8 items-center justify-center rounded-md border border-white/10 bg-white/5 font-mono text-xs text-primary">
            {site.initials}
          </span>
          <span className="text-sm tracking-tight">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={iconLinkClass}>
            <GithubIcon className="size-4" />
            <span className="sr-only">GitHub profile</span>
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={iconLinkClass}>
            <LinkedinIcon className="size-4" />
            <span className="sr-only">LinkedIn profile</span>
          </a>
          <a href={`mailto:${site.email}`} className={iconLinkClass}>
            <Mail className="size-4" aria-hidden="true" />
            <span className="sr-only">Send an email</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
