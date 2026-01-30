import Particles from "@/components/ui/Particles"

interface HeroSectionHeaderProps {
  kicker?: string
  title: string
  highlight: string
  subtitle?: string
}

export function HeroSectionHeader({
  kicker,
  title,
  highlight,
  subtitle,
}: HeroSectionHeaderProps) {
  return (
    <section className="relative w-full flex justify-center mb-24">

      {/* Particles (optional but consistent) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#3c2277"]}
          particleCount={40}
          particleSpread={12}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles
          disableRotation
          pixelRatio={
            typeof window !== "undefined"
              ? Math.min(window.devicePixelRatio, 1.5)
              : 1
          }
        />
      </div>

      {/* Glow */}
      <div
        aria-hidden
        className="
          absolute -top-24 left-1/2 -translate-x-1/2
          w-[420px] h-[420px]
          bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-sky-500/20
          blur-[140px]
          rounded-full
        "
      />

      <div className="relative text-center max-w-3xl px-6">

        {kicker && (
          <p className="text-sm uppercase tracking-widest text-white/60 mb-4">
            {kicker}
          </p>
        )}

        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
          {title}{" "}
          <span className="text-violet-400">
            {highlight}
          </span>
        </h2>

        {subtitle && (
          <p className="
            mt-6
            text-base md:text-lg
            font-light
            tracking-wide
            text-white/85
            leading-relaxed
            max-w-3xl
            mx-auto
          ">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
