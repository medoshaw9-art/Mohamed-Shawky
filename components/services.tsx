import { Code2, Smartphone, Component, LayoutTemplate } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { SERVICES } from "@/lib/portfolio-data"

const ICONS = [Code2, Smartphone, Component, LayoutTemplate]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        index="05"
        title="Services"
        subtitle="How I can help bring your web project to life."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <div
              key={service.title}
              className="group flex gap-5 rounded-2xl border border-border glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Icon className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
