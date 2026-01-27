import PixelCard from "../ui/PixelCard"

export default function HowIWorkPixel() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      
      {/* STEP 01 */}
      <PixelCard variant="pink" className="group">
        <div className="relative z-10 p-8 text-left">
          <p className="text-sm uppercase tracking-widest text-text-muted">
            Step 01
          </p>
          <h4 className="mt-3 text-2xl font-medium text-white">
            Architecture
          </h4>
          <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-[260px]">
            I design systems around real constraints — scalability, observability
            and long-term maintainability.
          </p>
        </div>
      </PixelCard>

      {/* STEP 02 */}
      <PixelCard variant="blue" className="group">
        <div className="relative z-10 p-8 text-left">
          <p className="text-sm uppercase tracking-widest text-text-muted">
            Step 02
          </p>
          <h4 className="mt-3 text-2xl font-medium text-white">
            Build & Automate
          </h4>
          <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-[260px]">
            Clean code, automated pipelines and reproducible ML workflows —
            engineered for production, not demos.
          </p>
        </div>
      </PixelCard>

      {/* STEP 03 */}
      <PixelCard variant="yellow" className="group">
        <div className="relative z-10 p-8 text-left">
          <p className="text-sm uppercase tracking-widest text-text-muted">
            Step 03
          </p>
          <h4 className="mt-3 text-2xl font-medium text-white">
            Operate & Improve
          </h4>
          <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-[260px]">
            I monitor drift, performance and failures — then iterate safely
            based on real production feedback.
          </p>
        </div>
      </PixelCard>

    </div>
  )
}
