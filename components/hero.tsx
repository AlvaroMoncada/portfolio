import { ArrowRight, Award, GraduationCap, ShieldCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-24 pb-20 text-center sm:px-6 md:pt-32 md:pb-28">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Available for new opportunities
        </div>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Web Developer &amp;{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Digital Security
          </span>{' '}
          Specialist
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Building fast, accessible web applications with security designed in from day one.
          Holder of a{' '}
          <span className="text-foreground">
            Higher Degree in Web Application Development (DAW)
          </span>
          .
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5 hover:bg-primary/90')}
          >
            View Work
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-11 border-white/15 bg-white/[0.02] px-5',
            )}
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 grid w-full max-w-3xl gap-3 text-left sm:grid-cols-2">
          <CredentialCard
            icon={<ShieldCheck className="size-5 text-accent" aria-hidden="true" />}
            iconClass="border-accent/30 bg-accent/10"
            eyebrow="Certified"
            title="Google Cybersecurity Certificate"
            meta={
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-accent">
                <Award className="size-3" aria-hidden="true" />
                VERIFIED
              </span>
            }
          />
          <CredentialCard
            icon={<GraduationCap className="size-5 text-primary" aria-hidden="true" />}
            iconClass="border-primary/30 bg-primary/10"
            eyebrow="Higher Degree"
            title="Web Application Development (DAW)"
            meta={<span className="font-mono text-[11px] text-primary">DEGREE</span>}
          />
        </div>
      </div>
    </section>
  )
}

function CredentialCard({
  icon,
  iconClass,
  eyebrow,
  title,
  meta,
}: {
  icon: React.ReactNode
  iconClass: string
  eyebrow: string
  title: string
  meta: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
      <div className={cn('flex size-11 shrink-0 items-center justify-center rounded-lg border', iconClass)}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{eyebrow}</p>
          {meta}
        </div>
        <p className="mt-0.5 truncate text-sm font-medium">{title}</p>
      </div>
    </div>
  )
}
