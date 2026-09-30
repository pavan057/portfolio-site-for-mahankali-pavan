import { BadgeCheck, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/content'

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <Reveal>
        <SectionHeading id="education-title" eyebrow="05 · Education" title="Education & certifications." />
      </Reveal>
      <Reveal>
        <ul className="divide-y divide-border rounded-2xl border border-border bg-card shadow-sm">
          {education.map((item) => {
            const Icon = item.kind === 'degree' ? GraduationCap : BadgeCheck
            return (
              <li key={item.title} className="flex items-start gap-4 p-5 md:items-center md:p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-text">
                  <Icon className="size-5" aria-hidden="true" />
                  <span className="sr-only">{item.kind === 'degree' ? 'Degree' : 'Certification'}</span>
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-6">
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{item.title}</p>
                    {item.detail && <p className="mt-0.5 text-sm text-muted-foreground">{item.detail}</p>}
                  </div>
                  {'dates' in item && item.dates && (
                    <p className="shrink-0 font-mono text-xs text-muted-foreground">{item.dates}</p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}
