import { site } from "@/lib/site"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative mt-32 pb-10">
      <div className="mx-auto w-full max-w-[1100px] px-6 md:px-10">
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-6
            text-sm text-white/40
          "
        >
          <p>
            © {new Date().getFullYear()} {site.name} — All rights reserved
          </p>

          <div className="flex items-center gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <Link
              href="/case-studies"
              className="hover:text-white transition"
            >
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
