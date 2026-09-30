import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { buttonVariants } from '@/components/ui/button'
import { projects } from '@/lib/content'
import { cn } from '@/lib/utils'

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading id="work-title" eyebrow="03 · Selected work" title="Things I've built." />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 100} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
              <p className="mt-1 text-base font-medium text-brand-text">{project.subtitle}</p>
              <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">{project.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Key stats">
                {project.stats.map((stat) => (
                  <li
                    key={stat}
                    className="rounded-lg border border-primary/20 bg-brand-soft px-3 py-1.5 font-mono text-xs font-medium text-brand-text"
                  >
                    {stat}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'outline' }), 'h-10 rounded-xl px-4')}
                >
                  <GitHubIcon className="size-4" />
                  View on GitHub
                  <ArrowUpRight aria-hidden="true" />
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
