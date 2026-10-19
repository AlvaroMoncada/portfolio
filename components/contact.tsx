import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

const channels = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    value: 'View repositories',
    href: site.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: site.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
]

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" aria-labelledby="contact-heading" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          id="contact-heading"
          index="03. contact"
          title="Let's build something secure"
          description="Open to full-time roles, freelance projects, and security-focused collaborations. The fastest way to reach me is by email."
        />

        <ul className="grid gap-4 md:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon
            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{channel.label}</span>
                    <span className="block truncate text-sm text-muted-foreground">
                      {channel.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>{`© ${year} ${site.name}. All rights reserved.`}</p>
          <p className="font-mono">
            <span className="text-accent">{'>'}</span> secure by design
          </p>
        </div>
      </div>
    </footer>
  )
}
