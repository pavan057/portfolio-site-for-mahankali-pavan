import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { atAGlance, profile } from '@/lib/content'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading id="about-title" eyebrow="01 · About" title="Engineer, evaluator, verifier." />
      </Reveal>
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        <Reveal className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl md:leading-relaxed">
            {profile.about}
          </p>
        </Reveal>
        <Reveal className="lg:col-span-2" delay={100}>
          <aside
            aria-labelledby="glance-title"
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 id="glance-title" className="font-mono text-xs font-medium tracking-widest text-brand-text uppercase">
              At a glance
            </h3>
            <dl className="mt-5 divide-y divide-border">
              {atAGlance.map((item) => (
                <div key={item.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="font-mono text-xs text-muted-foreground">{item.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
