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
              I'm interested in ML systems roles where engineering discipline matters. If my approach resonates, let's talk.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`mailto:${site.email}`}
                className="inline-block text-text-secondary hover:text-text-primary transition-colors"
              >
                ✉ {site.email}
              </a>
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
