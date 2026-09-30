import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/content'
import { cn } from '@/lib/utils'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-y border-border/60 bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading id="experience-title" eyebrow="02 · Experience" title="Where I've worked." />
        </Reveal>
        <ol className="relative ml-2 border-l-2 border-primary/30 md:ml-3">
          {experience.map((item, index) => {
            const isLead = index === 0
            return (
              <li key={item.title} className="relative pb-10 pl-7 last:pb-0 md:pl-10">
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-6 -left-[9px] size-4 rounded-full border-2 border-primary bg-background',
                    isLead && 'bg-primary ring-4 ring-primary/20',
                  )}
                />
                <Reveal delay={index * 60}>
                  <article
                    className={cn(
                      'rounded-2xl border bg-card p-6 shadow-sm md:p-7',
                      isLead ? 'border-primary/40' : 'border-border',
                    )}
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.org}
                          {item.meta ? ` · ${item.meta}` : ''}
                        </p>
                      </div>
                      <p className="flex shrink-0 items-center gap-2 font-mono text-xs text-muted-foreground md:pt-1">
                        {item.dates}
                        {item.current && (
                          <span className="rounded-full bg-brand-soft px-2 py-0.5 font-medium text-brand-text">
                            Present
                          </span>
                        )}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
