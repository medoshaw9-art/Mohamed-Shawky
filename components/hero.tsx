import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/brand-icons"
import { SOCIAL } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden px-4 pt-24 sm:px-6"
    >
      {/* subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(oklch(1_0_0_/_0.03)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            Available for work &amp; freelance projects
          </p>

          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Mohamed Shawky
          </h1>
          <p className="mt-4 font-mono text-lg text-primary sm:text-xl">
            Frontend Developer
          </p>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build modern, responsive and user-friendly web applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border glass text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Github className="size-5" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border glass text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto animate-fade-up [animation-delay:120ms] lg:mx-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-full bg-primary/15 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-full border border-border glass p-2">
            <Image
              src="/mohamed-shawky.jpeg"
              alt="Portrait of Mohamed Shawky"
              width={384}
              height={384}
              priority
              className="aspect-square size-60 rounded-full object-cover object-center sm:size-72 md:size-80 lg:size-96"
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
