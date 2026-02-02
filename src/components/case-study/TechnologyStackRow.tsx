// components/case-study/TechnologyStackRow.tsx

"use client"

type TechnologyStackRowProps = {
  stack?: string[]
}

export function TechnologyStackRow({ stack }: TechnologyStackRowProps) {
  if (!stack || stack.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="
            inline-flex items-center
            px-3 py-1.5
            rounded-full
            text-sm font-medium
            bg-purple-500/10
            text-purple-200/90
            border border-purple-400/15
            shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
            transition
            duration-200
            hover:border-purple-300/35
            hover:bg-purple-500/14
            hover:-translate-y-[1px]
            hover:shadow-[0_8px_22px_-14px_rgba(168,85,247,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]
          "
        >
          {tech}
        </span>
      ))}
    </div>
  )
}
