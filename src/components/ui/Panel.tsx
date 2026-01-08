export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-md border border-border-soft bg-bg-panel shadow-panel transition-all duration-300 hover:border-border-strong hover:-translate-y-[1px] ${className}`}
    >
      {children}
    </div>
  )
}
