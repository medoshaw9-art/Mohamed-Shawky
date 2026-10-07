"use client"

import { useState } from "react"
import { Mail, Send, CheckCircle2 } from "lucide-react"
import { Github, Linkedin } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { SOCIAL } from "@/lib/portfolio-data"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        index="06"
        title="Contact"
        subtitle="Have a project in mind or just want to connect? Send me a message."
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div className="rounded-2xl border border-border glass p-6 sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <CheckCircle2 className="size-12 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Thank you!
              </h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Your message has been captured. I&apos;ll get back to you as
                soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-2 text-sm font-medium text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 sm:w-auto"
              >
                Send Message
                <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}
        </div>

        <div className="space-y-3">
          <a
            href={`mailto:${SOCIAL.email}`}
            className="flex items-center gap-4 rounded-2xl border border-border glass p-5 transition-colors hover:border-primary/50"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <Mail className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-medium text-foreground">
                Email
              </span>
              <span className="block text-sm text-muted-foreground">
                {SOCIAL.email}
              </span>
            </span>
          </a>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border glass p-5 transition-colors hover:border-primary/50"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <Github className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-medium text-foreground">
                GitHub
              </span>
              <span className="block text-sm text-muted-foreground">
                View my repositories
              </span>
            </span>
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border glass p-5 transition-colors hover:border-primary/50"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <Linkedin className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-medium text-foreground">
                LinkedIn
              </span>
              <span className="block text-sm text-muted-foreground">
                Let&apos;s connect
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
