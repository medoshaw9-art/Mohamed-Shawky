"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  X,
  Info,
  CheckCircle2,
  Layers,
  User,
  Target,
  Sparkles,
  ArrowLeft,
} from "lucide-react"
import { Github } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { PROJECTS, type Project } from "@/lib/portfolio-data"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Close modal on Escape key and lock body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null)
      }
    }

    if (selectedProject) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        index="04"
        title="Projects"
        subtitle="A selection of applications I've designed and built."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border glass transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted/20">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} interface preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
                {project.tech.length > 4 && (
                  <li className="rounded-full border border-border bg-secondary/30 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    +{project.tech.length - 4} more
                  </li>
                )}
              </ul>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/85 hover:shadow-md hover:shadow-primary/20"
                >
                  <Info className="size-4" />
                  Details
                </button>
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github className="size-4" />
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
        >
          {/* Light dismiss backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedProject(null)}
            aria-hidden="true"
          />

          {/* Modal Content Card */}
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all">
            {/* Modal Media Banner */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted/30 sm:aspect-[21/9]">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={`${selectedProject.title} preview`}
                fill
                priority
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-3 right-3 inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-border bg-background/85 backdrop-blur-md text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <X className="size-4" />
              </button>

              {/* Role Badge in Banner */}
              <div className="absolute bottom-3 left-4 sm:left-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/90 px-3 py-1 font-mono text-xs font-medium text-primary backdrop-blur-md">
                  <User className="size-3" />
                  {selectedProject.myRole}
                </span>
              </div>
            </div>

            {/* Scrollable Details Body */}
            <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
              <div>
                <h3
                  id="project-modal-title"
                  className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {selectedProject.description}
                </p>
              </div>

              {/* Role & Focus Cards */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-secondary/30 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <User className="size-3.5 text-primary" />
                    My Role
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {selectedProject.myRole}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-secondary/30 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <Target className="size-3.5 text-primary" />
                    Focus
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {selectedProject.focus}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                  <Sparkles className="size-3.5 text-primary" />
                  Key Features
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selectedProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                  <Layers className="size-3.5 text-primary" />
                  Technologies
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Action Bar */}
            <div className="flex items-center justify-between gap-3 border-t border-border bg-card/80 p-4 backdrop-blur-md sm:px-7">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border glass px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <ArrowLeft className="size-4" />
                Back to Projects
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={selectedProject.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  <Github className="size-4" />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
