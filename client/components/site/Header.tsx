import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Solutions", href: "#solutions" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "/about" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("inline-flex items-center gap-2", className)} aria-label="Lepaya Home">
      <span className="relative inline-flex items-center">
        <span className="h-6 w-6 rounded-full bg-primary" />
      </span>
      <span className="text-xl font-extrabold tracking-tight">Lepaya</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-tight flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {nav.map((item) => (
            item.href.startsWith("/") ? (
              <Link key={item.href} to={item.href} className="text-foreground/80 hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="text-foreground/80 hover:text-foreground transition-colors">
                {item.label}
              </a>
            )
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
          <Button size="lg" className="rounded-full px-5 py-2 text-base">Request demo</Button>
        </div>
        <button aria-label="Toggle menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border" onClick={() => setOpen((v) => !v)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-tight py-3 flex flex-col gap-2">
            {nav.map((item) => (
              item.href.startsWith("/") ? (
                <Link key={item.href} to={item.href} className="py-2 text-base" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} href={item.href} className="py-2 text-base" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              )
            ))}
            <Link to="/contact"><Button className="rounded-full" onClick={() => setOpen(false)}>Request demo</Button></Link>
          </div>
        </div>
      )}
    </header>
  );
}
