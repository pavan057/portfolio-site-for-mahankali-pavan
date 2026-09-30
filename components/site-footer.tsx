import { profile } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>© 2026 Mahankali Pavan · Hyderabad</p>
        <p>
          Built with v0 ·{' '}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-text underline-offset-4 hover:underline"
          >
            Code on GitHub
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </p>
      </div>
    </footer>
  )
}
