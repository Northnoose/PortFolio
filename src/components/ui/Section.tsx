export function Section({
  title,
  kicker,
  children,
  id,
}: {
  title: string
  kicker?: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className="space-y-8 py-12 md:py-14">
      <header className="space-y-3">
        {kicker && (
          <p className="text-sm uppercase tracking-wide text-text-muted">
            {kicker}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-medium">
          {title}
        </h2>
      </header>
      {children}
    </section>
  )
}
