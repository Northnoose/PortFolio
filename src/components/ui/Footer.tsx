import { site } from "@/lib/site"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-bg-page py-12">
      <div className="mx-auto w-full max-w-[1100px] px-6 md:px-10">
        <div className="space-y-8">
          {/* Contact CTA */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Let's work together</h3>
            <p className="text-text-secondary max-w-[500px]">
              Two collaborators building data-driven products and reliable ML systems. Reach out to either of us.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <div className="space-y-1">
                <p className="text-sm font-medium text-text-primary">Steffen Nordnes</p>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-block text-text-secondary hover:text-text-primary transition-colors"
                >
                  ✉ {site.email}
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-text-primary">Deivi Selenis</p>
                <a
                  href="mailto:deivi.selenis@gmail.com"
                  className="inline-block text-text-secondary hover:text-text-primary transition-colors"
                >
                  ✉ deivi.selenis@gmail.com
                </a>
                <a
                  href="tel:+4790820779"
                  className="block text-text-secondary hover:text-text-primary transition-colors"
                >
                  ☎ +47 90820779
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="border-t border-border-soft pt-8">
            <div className="flex flex-wrap gap-6">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors text-sm"
              >
                LinkedIn
              </a>
              <Link
                href="/case-studies"
                className="text-text-secondary hover:text-text-primary transition-colors text-sm"
              >
                Case Studies
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border-soft pt-8">
            <p className="text-text-muted text-xs">
              © 2025 {site.name}. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
