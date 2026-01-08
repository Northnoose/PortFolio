export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border-soft bg-bg-elevated px-2.5 py-1 text-xs text-text-secondary">
      {label}
    </span>
  )
}
