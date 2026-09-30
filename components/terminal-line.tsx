'use client'

import { useEffect, useState } from 'react'

const TEXT = "verify, don't assume"

export function TerminalLine() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(TEXT.length)
      return
    }
    let i = 0
    const start = setTimeout(function tick() {
      i += 1
      setCount(i)
      if (i < TEXT.length) timer = setTimeout(tick, 65)
    }, 500)
    let timer = start
    return () => clearTimeout(timer)
  }, [])

  return (
    <p className="font-mono text-sm text-muted-foreground md:text-base">
      <span className="sr-only">{`> ${TEXT}`}</span>
      <span aria-hidden="true">
        <span className="text-brand-text">{'>'}</span> {TEXT.slice(0, count)}
        <span className="caret text-brand-text">_</span>
      </span>
    </p>
  )
}
