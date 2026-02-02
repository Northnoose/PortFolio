// components/case-study/iconMap.ts

import {
  AlertTriangle,
  Zap,
  Shield,
  CheckCircle2,
  Lightbulb,
  Code2,
  DollarSign,
  FileText,
  Timer,
  Briefcase,
  Building2,
} from "lucide-react"

export const caseStudyIcons = {
  context: FileText,
  problem: AlertTriangle,
  solution: Zap,
  challenges: Shield,
  results: CheckCircle2,
  lessons: Lightbulb,
  stack: Code2,
  impact: DollarSign,

  // Header meta icons
  duration: Timer,
  role: Briefcase,
  client: Building2,
} as const
