import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute -top-28 -right-20 h-[420px] w-[420px] rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />
        <div className="container-tight grid gap-10 py-16 md:grid-cols-2 md:gap-14 md:py-24">
          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70">Blended learning platform</span>
            <h1 className="heading-hero mt-4">Power skills training that drives measurable performance</h1>
            <p className="mt-5 max-w-xl text-lg text-foreground/70">
              Build the capabilities your teams need to perform today — with measurable impact in weeks, not years.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="rounded-full text-base px-6">Request demo</Button>
              <a href="#programs" className="text-sm font-semibold underline underline-offset-4 sm:ml-2">Explore programs</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-center text-sm text-foreground/70 max-w-md">
              <div><span className="block text-3xl font-extrabold text-foreground">95%</span> apply skills on the job</div>
              <div><span className="block text-3xl font-extrabold text-foreground">5x</span> faster upskilling</div>
              <div><span className="block text-3xl font-extrabold text-foreground">40+</span> programs</div>
            </div>
          </div>
          {/* Visual */}
          <div className="relative">
            <div className="absolute -left-16 -top-10 h-24 w-24 rounded-full bg-primary/60 blur-2xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-2xl border bg-white p-4 shadow-xl">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-xl bg-secondary" />
                  ))}
                </div>
                <div className="mt-4 rounded-xl border p-4">
                  <p className="text-sm font-semibold">Manager Essentials</p>
                  <p className="mt-1 text-sm text-foreground/70">
                    A practical path to confident leadership across your organization.
                  </p>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 hidden rotate-6 rounded-2xl border bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-semibold">Live session</p>
                    <p className="text-xs text-foreground/70">Starts Thu 10:00</p>
                  </div>
                </div>
                <div className="mt-3 h-2 w-48 rounded-full bg-secondary" />
                <div className="mt-2 h-2 w-40 rounded-full bg-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="container-tight py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2">Capability solutions for every team</h2>
          <p className="mt-3 text-foreground/70">From first-time managers to seasoned leaders, we develop the skills that matter most.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Leadership",
              desc: "Build confident leaders with the skills to coach, delegate and drive performance.",
            },
            {
              title: "Collaboration",
              desc: "Enable teams to communicate effectively and solve problems together.",
            },
            {
              title: "Productivity",
              desc: "Boost output with focus, prioritization and time management skills.",
            },
          ].map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl border bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/30 blur-xl transition-transform group-hover:translate-x-2" aria-hidden="true" />
              <h3 className="heading-3">{c.title}</h3>
              <p className="mt-2 text-foreground/70">{c.desc}</p>
              <a href="#programs" className="mt-6 inline-flex items-center text-sm font-semibold underline underline-offset-4">Explore programs</a>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="relative overflow-hidden bg-foreground text-white">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary blur-3xl opacity-90" aria-hidden="true" />
        <div className="container-tight py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="heading-2 text-white">Designed for measurable impact</h2>
              <p className="mt-3 max-w-lg text-white/80">Science-backed, experience-led. We combine online and live learning in the flow of work to create lasting behavior change.</p>
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div><span className="block text-4xl font-extrabold text-primary">+38%</span><span className="text-white/80"> performance</span></div>
                <div><span className="block text-4xl font-extrabold text-primary">95%</span><span className="text-white/80"> apply skills</span></div>
                <div><span className="block text-4xl font-extrabold text-primary">NPS 70</span><span className="text-white/80"> learners love it</span></div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="h-2 w-4/5 rounded-full bg-white/20" />
                <div className="mt-3 h-2 w-3/5 rounded-full bg-white/20" />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-xl bg-white/10" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="container-tight py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="heading-2">Programs built for outcomes</h2>
            <p className="mt-2 text-foreground/70">Modular, stackable and tailored to your context.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm font-semibold underline underline-offset-4">See all programs</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Manager Essentials",
              desc: "From individual contributor to confident people leader.",
            },
            { title: "Effective Communication", desc: "Clarity, influence and impact in every message." },
            { title: "High-Performance Habits", desc: "Focus, prioritization and execution that sticks." },
          ].map((p) => (
            <article key={p.title} className="group rounded-2xl border bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="h-40 w-full rounded-xl bg-secondary" />
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-foreground/70">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <a href="#" className="text-sm font-semibold underline underline-offset-4">Learn more</a>
                <Button className="rounded-full" size="sm">Request demo</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="container-tight py-16 md:py-24">
        <div className="rounded-2xl border bg-white p-8 md:p-12">
          <p className="text-lg md:text-xl font-semibold max-w-4xl">
            “With Lepaya, our managers quickly developed the capabilities to lead with clarity, coach effectively and drive team performance.”
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary" />
            <div className="text-sm">
              <p className="font-semibold">Alex Janssen</p>
              <p className="text-foreground/70">HR Director, Global Org</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="container-tight py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2">Insights and resources</h2>
          <p className="mt-2 text-foreground/70">Expert guidance on capability building and organizational performance.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="rounded-2xl border bg-white p-6">
              <div className="h-32 w-full rounded-xl bg-secondary" />
              <h3 className="mt-4 text-lg font-semibold">How to scale leadership capabilities</h3>
              <p className="mt-2 text-sm text-foreground/70">A practical playbook for building high-performing managers in months.</p>
              <a href="#" className="mt-3 inline-block text-sm font-semibold underline underline-offset-4">Read article</a>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/40 blur-2xl" aria-hidden="true" />
        <div className="container-tight">
          <div className="relative isolate overflow-hidden rounded-2xl border bg-white p-8 md:p-12">
            <h3 className="heading-2 max-w-2xl">Ready to power up your people?</h3>
            <p className="mt-2 max-w-2xl text-foreground/70">See how Lepaya can deliver measurable impact for your organization.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-full">Request demo</Button>
              <a href="#contact" className="sm:ml-2 inline-flex items-center text-sm font-semibold underline underline-offset-4">Contact us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
