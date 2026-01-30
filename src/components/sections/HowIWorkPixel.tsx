import PixelCard from "../ui/PixelCard"

export default function HowIWorkPixel() {
  return (
    <div
      className="
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-x-24
        gap-y-28
        justify-items-center
      "
    >
      {/* =============================
          STEP 01
      ============================= */}
      <PixelCard variant="pink">
        <div className="relative w-full h-full">

          {/* IDLE — STEP BADGE */}
          <div
            className="
              absolute inset-0
              flex items-center justify-center
              transition-all duration-300
              group-hover:opacity-0
              group-hover:scale-90
            "
          >
            <span
              className="
                inline-flex items-center
                px-8 py-3
                rounded-full
                text-base font-semibold tracking-[0.2em]
                text-pink-200
                bg-gradient-to-r from-pink-500/25 to-pink-400/10
                border border-pink-400/40
                shadow-[0_0_35px_rgba(236,72,153,0.45)]
              "
            >
              STEP 01
            </span>
          </div>

          {/* HOVER — CONTENT */}
          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center
              text-center
              px-14
              opacity-0 translate-y-6
              transition-all duration-300 delay-75
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            <h4 className="text-3xl font-semibold text-white">
              Architecture
            </h4>
            <p className="mt-6 text-base text-white/80 leading-relaxed max-w-[340px]">
              I design systems around real constraints — scalability,
              observability and long-term maintainability.
            </p>
          </div>

        </div>
      </PixelCard>

      {/* =============================
          STEP 02
      ============================= */}
      <PixelCard variant="blue">
        <div className="relative w-full h-full">

          <div
            className="
              absolute inset-0
              flex items-center justify-center
              transition-all duration-300
              group-hover:opacity-0
              group-hover:scale-90
            "
          >
            <span
              className="
                inline-flex items-center
                px-8 py-3
                rounded-full
                text-base font-semibold tracking-[0.2em]
                text-sky-200
                bg-gradient-to-r from-sky-500/25 to-sky-400/10
                border border-sky-400/40
                shadow-[0_0_35px_rgba(56,189,248,0.45)]
              "
            >
              STEP 02
            </span>
          </div>

          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center
              text-center
              px-14
              opacity-0 translate-y-6
              transition-all duration-300 delay-75
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            <h4 className="text-3xl font-semibold text-white">
              Build & Automate
            </h4>
            <p className="mt-6 text-base text-white/80 leading-relaxed max-w-[340px]">
              Clean code, automated pipelines and reproducible ML workflows —
              engineered for production, not demos.
            </p>
          </div>

        </div>
      </PixelCard>

      {/* =============================
          STEP 03
      ============================= */}
      <PixelCard variant="default">
        <div className="relative w-full h-full">

          <div
            className="
              absolute inset-0
              flex items-center justify-center
              transition-all duration-300
              group-hover:opacity-0
              group-hover:scale-90
            "
          >
            <span
              className="
                inline-flex items-center
                px-8 py-3
                rounded-full
                text-base font-semibold tracking-[0.2em]
                text-amber-200
                bg-gradient-to-r from-amber-400/30 to-yellow-300/10
                border border-amber-300/40
                shadow-[0_0_35px_rgba(251,191,36,0.45)]
              "
            >
              STEP 03
            </span>
          </div>

          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center
              text-center
              px-14
              opacity-0 translate-y-6
              transition-all duration-300 delay-75
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            <h4 className="text-3xl font-semibold text-white">
              Operate & Improve
            </h4>
            <p className="mt-6 text-base text-white/80 leading-relaxed max-w-[340px]">
              I monitor drift, performance and failures — then iterate safely
              based on real production feedback.
            </p>
          </div>

        </div>
      </PixelCard>
    </div>
  )
}
