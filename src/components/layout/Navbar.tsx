"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import clsx from "clsx"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
]

export function Navbar() {
  const pathname = usePathname()

  const barRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [dotX, setDotX] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  /* ======================================================
     ACTIVE DOT POSITION
  ====================================================== */
  useEffect(() => {
    const active = navItems.find(item =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    )
    if (!active) return

    const el = itemRefs.current[active.href]
    const bar = barRef.current
    if (!el || !bar) return

    const elRect = el.getBoundingClientRect()
    const barRect = bar.getBoundingClientRect()

    const DOT_OFFSET = 18
    setDotX(elRect.left - barRect.left + DOT_OFFSET)
  }, [pathname])

  /* ======================================================
     SCROLL PROGRESS
  ====================================================== */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* ======================================================
         SCROLL PROGRESS BAR
      ====================================================== */}
      <div
        className="
          fixed top-0 left-0 z-[60]
          h-[2px] w-full
          origin-left
          transition-transform duration-150 ease-out
        "
        style={{
          transform: `scaleX(${scrollProgress})`,
          background:
            "linear-gradient(90deg, rgba(56,189,248,0.9) 0%, rgba(139,92,246,0.95) 100%)",
        }}
      />

      {/* ======================================================
         NAVBAR
      ====================================================== */}
      <header className="sticky top-0 z-50">
        <div
          className="
            relative w-full
            backdrop-blur-xl
            bg-gradient-to-b
            from-[#0c1016]/85
            via-[#070a10]/80
            to-[#000000]/85
          "
        >
          {/* ======================================================
             LEFT — LOGO (VIEWPORT-ANCHORED)
          ====================================================== */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
            <Link href="/" className="flex items-center gap-3 select-none">
              <span
                className="
                  h-10 w-10
                  rounded-full
                  bg-gradient-to-br from-violet-500 to-purple-600
                  shadow-[0_0_18px_rgba(168,85,247,0.55)]
                  transition-transform duration-300
                  hover:scale-105
                "
              />
              <span className="hidden sm:inline text-lg font-semibold text-white tracking-tight">
                Steffen Nordnes
              </span>
            </Link>
          </div>

          {/* ======================================================
             RIGHT — CTA (VIEWPORT-ANCHORED)
          ====================================================== */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
            <Link
              href="/#contact"
              className="
                hidden md:inline-flex
                items-center
                px-6 py-3
                rounded-xl
                text-base font-medium
                text-black
                bg-gradient-to-r from-violet-500 to-purple-500
                shadow-lg shadow-purple-500/30
                transition-all duration-300
                hover:brightness-110
                hover:-translate-y-0.5
              "
            >
              Get in touch
            </Link>
          </div>

          {/* ======================================================
             CENTER — NAV ITEMS (TRUE CENTER)
          ====================================================== */}
          <div className="flex justify-center py-6">
            <div
              ref={barRef}
              className="
                relative
                flex items-center gap-10
              "
            >
              {/* Active dot */}
              <span
                className="
                  pointer-events-none
                  absolute top-1/2
                  h-2.5 w-2.5
                  rounded-full
                  bg-purple-400
                  transition-all duration-300 ease-out
                "
                style={{
                  left: dotX,
                  transform: "translate(-50%, -50%)",
                }}
              />

              {navItems.map(item => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={el => {
                      itemRefs.current[item.href] = el
                    }}
                    className={clsx(
                      `
                        relative flex items-center
                        px-8 py-4
                        text-lg font-medium
                        rounded-2xl
                        transition-all duration-300
                        whitespace-nowrap
                      `,
                      active
                        ? "text-purple-300"
                        : "text-neutral-300 hover:text-purple-200"
                    )}
                  >
                    {active && (
                      <>
                        <span className="absolute inset-0 -z-10 rounded-xl bg-purple-500/14 backdrop-blur-md" />
                        <span className="absolute inset-0 -z-20 rounded-xl bg-purple-500/35 blur-2xl" />
                      </>
                    )}
                    <span className="relative z-10">
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
