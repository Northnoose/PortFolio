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

  /* Calculate active item dot position */
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

  /* Scroll progress bar */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
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


      {/* Sticky top bar */}
      <header className="sticky top-0 z-50">
        <div
          className="
            w-full
            backdrop-blur-xl
            bg-gradient-to-b
            from-[#0c1016]/85
            via-[#070a10]/80
            to-[#000000]/85
          "
        >
          {/* Floating nav items */}
          <div
            ref={barRef}
            className="
              relative mx-auto
              flex justify-center items-center
              gap-6
              py-6
            "
          >
            {/* Dynamic active dot */}
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
                    `,
                    active
                      ? "text-purple-300"
                      : "text-neutral-300 hover:text-purple-200"
                  )}
                >
                  {active && (
                    <>
                      {/* Active background */}
                      <span
                        className="
                          absolute inset-0 -z-10
                          rounded-2xl
                          bg-purple-500/14
                          backdrop-blur-md
                        "
                      />

                      {/* Active glow */}
                      <span
                        className="
                          absolute inset-0 -z-20
                          rounded-2xl
                          bg-purple-500/35
                          blur-2xl
                        "
                      />
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
      </header>
    </>
  )
}
