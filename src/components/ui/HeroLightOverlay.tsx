"use client"

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function HeroLightOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const size = random(12, 22)
          const top = random(5, 85)
          const left = random(5, 90)
          const dx = random(-320, 320)
          const dy = random(-320, 320)
          const duration = random(36, 56)
          const delay = random(-40, 0)


          return (
            <span
              key={i}
              className="
                absolute rounded-full
                bg-[radial-gradient(circle,rgba(168,85,247,0.85)_0%,rgba(168,85,247,0.5)_38%,rgba(168,85,247,0.25)_58%,transparent_70%)]
                animate-particle
              "
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                animationIterationCount: "infinite",
                ["--dx" as any]: `${dx}px`,
                ["--dy" as any]: `${dy}px`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
