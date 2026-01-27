import { notFound } from "next/navigation"

export default function ProjectDetailPage() {
  // Projects now open in modals on /projects page
  // Direct routing to individual projects is no longer supported
  notFound()
}
