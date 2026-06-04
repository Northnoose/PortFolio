import Link from "next/link"

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-32">
      {/* Glow */}
      <div
        aria-hidden
        className="
          absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2
          h-[420px] w-[420px]
          rounded-full
          bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-sky-500/20
          blur-[140px]
        "
      />

      <div className="relative max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Page not found
        </h1>
        <p className="mt-6 text-base font-light leading-relaxed text-white/80 md:text-lg">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              rounded-xl px-6 py-3
              text-base font-medium text-black
              bg-gradient-to-r from-violet-500 to-purple-500
              shadow-lg shadow-purple-500/30
              transition-all duration-300
              hover:-translate-y-0.5 hover:brightness-110
            "
          >
            Back to home
          </Link>
          <Link
            href="/projects"
            className="
              inline-flex items-center justify-center
              rounded-xl px-6 py-3
              text-base font-medium text-white/90
              border border-white/15
              transition-colors duration-300
              hover:border-violet-400/40 hover:text-white
            "
          >
            View projects
          </Link>
        </div>
      </div>
    </main>
  )
}
