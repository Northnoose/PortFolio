"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container } from "@/components/ui/Container"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-40 w-full border-b border-border-soft bg-bg-page/70 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-text-primary"
          >
            <span className="md:hidden">Steffen & Deivi</span>
            <span className="hidden md:inline">Steffen Nordnes & Deivi Selenis</span>
          </Link>

          <ul className="flex items-center gap-6 text-sm">
            {links.map((link) => {
              const isActive = pathname === link.href

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      isActive
                        ? "text-text-primary"
                        : "text-text-muted hover:text-text-primary transition-colors"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
