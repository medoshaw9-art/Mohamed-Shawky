"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Code2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { EXPERIENCE } from "@/lib/portfolio-data"

function TimelineItem({
  item,
  last,
}: {
  item: (typeof EXPERIENCE)[number]
  last: boolean
}) {
  const ref = useRef<HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Icon = item.kind === "Training" ? GraduationCap : Code2

  return (
    <li
      ref={ref}
      className={`relative pl-14 transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${last ? "" : "pb-12"}`}
    >
      {/* vertical line */}
      {!last ? (
        <span
          aria-hidden="true"
          className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-border"
        />
      ) : null}

      {/* node */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-card text-primary ring-4 ring-background"
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>

      <div className="rounded-2xl border border-border glass p-6 transition-colors hover:border-primary/50">
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide text-primary">
          {item.kind}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-foreground">
          {item.title}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-primary/90">
          {item.role}
        </p>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        {item.tech ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-card/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  )
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        index="02"
        title="Experience"
        subtitle="Hands-on training and projects where I've built and refined my frontend skills."
      />
      <ol className="max-w-3xl">
        {EXPERIENCE.map((item, i) => (
          <TimelineItem
            key={item.title}
            item={item}
            last={i === EXPERIENCE.length - 1}
          />
        ))}
      </ol>
    </section>
  )
}
