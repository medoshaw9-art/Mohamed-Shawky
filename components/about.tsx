import { SectionHeading } from "@/components/section-heading"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading index="01" title="About Me" />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I&apos;m a Frontend Developer who enjoys turning ideas into clean,
            modern web applications. I care about the details that make an
            interface feel effortless — clear layouts, smooth interactions and
            a responsive experience across every device.
          </p>
          <p>
            My focus is on writing organized, reusable code and building UIs
            with HTML, CSS, JavaScript and React. I&apos;m continuously
            improving my development skills and exploring better ways to craft
            fast, accessible and user-friendly products.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border glass">
          {[
            { label: "Focus", value: "Frontend" },
            { label: "Core stack", value: "React" },
            { label: "Approach", value: "Mobile-first" },
            { label: "Code style", value: "Clean & reusable" },
          ].map((item) => (
            <div key={item.label} className="bg-card/40 p-6">
              <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-2 text-lg font-semibold text-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
