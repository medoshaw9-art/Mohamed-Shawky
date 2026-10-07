import { SectionHeading } from "@/components/section-heading"
import { SKILLS } from "@/lib/portfolio-data"

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        index="03"
        title="Skills"
        subtitle="The tools and technologies I use to build modern web interfaces."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="group relative overflow-hidden rounded-2xl border border-border glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            />
            <h3 className="text-lg font-semibold text-foreground">
              {skill.name}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
