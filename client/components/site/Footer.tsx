import { Button } from "@/components/ui/button";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Power Skills", href: "#solutions" },
      { label: "Leadership", href: "#solutions" },
      { label: "Sales Enablement", href: "#solutions" },
      { label: "Onboarding", href: "#solutions" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Communication", href: "#programs" },
      { label: "Productivity", href: "#programs" },
      { label: "Collaboration", href: "#programs" },
      { label: "Wellbeing", href: "#programs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Careers", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Press", href: "#about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#resources" },
      { label: "Customer stories", href: "#impact" },
      { label: "Events", href: "#resources" },
      { label: "Guides", href: "#resources" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-tight py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold tracking-tight">Power up your people</h3>
            <p className="mt-3 text-foreground/70 max-w-sm">
              Measurable impact through blended learning — online, in the flow of work, and in person.
            </p>
            <div className="mt-6">
              <Button size="lg" className="rounded-full btn-anim">Request demo</Button>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-3">{col.title}</h4>
              <ul className="space-y-2 text-foreground/80">
                {col.links.map((l) => (
                  <li key={l.label}><a className="hover:underline underline-offset-4" href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t">
        <div className="container-tight py-6 flex flex-col gap-3 md:flex-row items-center justify-between text-sm text-foreground/70">
          <p>© {new Date().getFullYear()} Lepaya. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:underline underline-offset-4">Privacy</a>
            <a href="#" className="hover:underline underline-offset-4">Terms</a>
            <a href="#" className="hover:underline underline-offset-4">Security</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
