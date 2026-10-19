import { Code2, ShieldHalf } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/section-heading'
import { securitySkills, securityTools, webSkills, webTools } from '@/lib/site'
import { cn } from '@/lib/utils'

type Skill = { name: string; level: number }

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 border-y border-white/10 bg-white/[0.015]"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          id="skills-heading"
          index="02. skills"
          title="Technical Skills"
          description="A dual focus on shipping modern web products and protecting them against real-world threats."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <SkillPanel
            title="Web Development"
            subtitle="Frontend & Backend"
            icon={<Code2 className="size-5 text-primary" aria-hidden="true" />}
            tone="blue"
            skills={webSkills}
            tools={webTools}
          />
          <SkillPanel
            title="Cybersecurity & Risk Mitigation"
            subtitle="Defense & Analysis"
            icon={<ShieldHalf className="size-5 text-accent" aria-hidden="true" />}
            tone="green"
            skills={securitySkills}
            tools={securityTools}
          />
        </div>
      </div>
    </section>
  )
}

function SkillPanel({
  title,
  subtitle,
  icon,
  tone,
  skills,
  tools,
}: {
  title: string
  subtitle: string
  icon: React.ReactNode
  tone: 'blue' | 'green'
  skills: Skill[]
  tools: string[]
}) {
  const isBlue = tone === 'blue'
  return (
    <div className="rounded-xl border border-white/10 bg-background/60 p-6 backdrop-blur md:p-8">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'flex size-10 items-center justify-center rounded-lg border',
            isBlue ? 'border-primary/30 bg-primary/10' : 'border-accent/30 bg-accent/10',
          )}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-semibold tracking-tight">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <ul className="mt-8 flex flex-col gap-5">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>{skill.name}</span>
              <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div
              role="progressbar"
              aria-label={skill.name}
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-1.5 overflow-hidden rounded-full bg-white/5"
            >
              <div
                className={cn('h-full rounded-full', isBlue ? 'bg-primary' : 'bg-accent')}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          Tools &amp; Frameworks
        </p>
        <ul className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <li key={tool}>
              <Badge
                variant="outline"
                className={cn(
                  'font-mono text-[11px]',
                  isBlue
                    ? 'border-primary/25 bg-primary/5 text-blue-300'
                    : 'border-accent/25 bg-accent/5 text-green-300',
                )}
              >
                {tool}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
