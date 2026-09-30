import { ArrowDown, MapPin } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { TerminalLine } from '@/components/terminal-line'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="relative overflow-hidden">
      <div className="dotted-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:px-8 md:pt-32 md:pb-36">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground shadow-sm">
          <MapPin className="size-3.5 text-brand-text" aria-hidden="true" />
          {profile.locationShort}
        </span>

        <h1
          id="hero-name"
          className="mt-6 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
          {profile.role}
        </p>
        <div className="mt-4">
          <TerminalLine />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={profile.mailto}
            className={cn(buttonVariants(), 'h-11 rounded-xl px-5 text-sm shadow-sm hover:bg-primary/90')}
          >
            Get in touch
          </a>
          <a
            href="#work"
            className={cn(buttonVariants({ variant: 'outline' }), 'h-11 rounded-xl px-5 text-sm')}
          >
            View my work
            <ArrowDown aria-hidden="true" />
          </a>
          <div className="flex items-center gap-1 sm:ml-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className={cn(buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'size-11 rounded-xl')}
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className={cn(buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'size-11 rounded-xl')}
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
