import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6"
    >
      <SectionHeading
        id="projects-heading"
        index="01. projects"
        title="Deployed Work"
        description="Production web applications built end-to-end, from interface design to secure deployment."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group gap-0 overflow-hidden border border-white/10 bg-white/[0.02] py-0 ring-0 transition-colors hover:border-white/20"
          >
            <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-muted">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <CardHeader className="pt-6">
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {project.status}
                </span>
              </div>
              <CardDescription className="mt-1 leading-relaxed">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 pb-6">
              <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Badge
                      variant="outline"
                      className="border-white/10 bg-white/5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto border-t border-white/10 bg-transparent py-4">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: 'sm' }), 'h-8 px-3 hover:bg-primary/90')}
              >
                Live Deployment
                <ExternalLink data-icon="inline-end" aria-hidden="true" />
                <span className="sr-only">{`of ${project.title} (opens in new tab)`}</span>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
