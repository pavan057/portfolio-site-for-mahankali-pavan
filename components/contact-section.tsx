import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { CopyEmail } from '@/components/copy-email'
import { Reveal } from '@/components/reveal'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/lib/content'
import { cn } from '@/lib/utils'

const outlineBtn = cn(
  buttonVariants({ variant: 'outline' }),
  'h-11 rounded-xl border-white/25 bg-white/10 px-5 text-white hover:bg-white/20 hover:text-white dark:border-white/25 dark:bg-white/10 dark:hover:bg-white/20',
)

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground shadow-lg md:px-14 md:py-20">
          <div className="dotted-grid pointer-events-none absolute inset-0 opacity-40 [--grid-dot:rgb(255_255_255/0.35)]" aria-hidden="true" />
          <div className="relative">
            <p className="font-mono text-xs font-medium tracking-widest text-white/80 uppercase">06 · Contact</p>
            <h2
              id="contact-title"
              className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance md:text-5xl"
            >
              {"Let's build something reliable."}
            </h2>

            <div className="mt-8">
              <CopyEmail email={profile.email} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.mailto}
                className={cn(buttonVariants(), 'h-11 rounded-xl bg-white px-5 text-primary hover:bg-white/90')}
              >
                <Mail aria-hidden="true" />
                Get in touch
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
                <LinkedInIcon className="size-4" />
                LinkedIn
                <span className="sr-only">(opens in new tab)</span>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
                <GitHubIcon className="size-4" />
                GitHub
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
