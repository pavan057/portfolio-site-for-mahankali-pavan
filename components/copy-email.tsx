'use client'

import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      const range = document.createRange()
      const node = document.getElementById('contact-email')
      if (node) {
        range.selectNodeContents(node)
        const sel = window.getSelection()
        sel?.removeAllRanges()
        sel?.addRange(range)
      }
    }
  }

  return (
    <div className="flex w-full max-w-xl flex-wrap items-center gap-2 rounded-2xl border border-white/20 bg-black/15 p-2 pl-4 sm:flex-nowrap">
      <span id="contact-email" className="min-w-0 flex-1 font-mono break-all sm:truncate text-sm text-white select-all md:text-base">
        {email}
      </span>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-white/15 px-3 text-sm font-medium text-white transition-colors hover:bg-white/25 focus-visible:outline-white"
      >
        {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  )
}
