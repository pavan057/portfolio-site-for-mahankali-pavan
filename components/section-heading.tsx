export function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="font-mono text-xs font-medium tracking-widest text-brand-text uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl"
      >
        {title}
      </h2>
    </div>
  )
}
