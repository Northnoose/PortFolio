export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]
  href?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "automated-mlops",
    title: "Automated MLOps Pipeline",
    summary:
      "An end-to-end MLOps pipeline automating training, versioning, and deployment of machine learning models.",
    tags: ["Python", "MLOps", "Automation", "ML Systems"],
    featured: true,
  },
  {
    slug: "python-learning-platform",
    title: "Interactive Python Learning Platform",
    summary:
      "A web-based platform that allows beginners to write and execute Python code in a guided environment.",
    tags: ["Python", "Web", "Education"],
  },
  {
    slug: "snake-ai",
    title: "Snake AI (TensorFlow → PyTorch)",
    summary:
      "Reimplemented a machine learning-based Snake agent by translating a TensorFlow model to PyTorch.",
    tags: ["PyTorch", "TensorFlow", "Reinforcement Learning"],
  },
]
