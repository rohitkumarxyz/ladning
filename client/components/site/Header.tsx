import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

const nav = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center ", className)}
      aria-label="Lepaya Home"
    >
      <span className="inline-flex items-center">
        <img src="/Tradeneeti-Logo.png" alt="Logo" className="h-14 w-14" />
      </span>
      <span className="text-xl font-extrabold tracking-tight">Tradeneeti</span>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-tight flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-md font-medium">
          {nav.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact">
            <Button
              size="lg"
              className="rounded-full px-5 py-2 text-base btn-anim"
            >
              Request A Call
            </Button>
          </Link>
        </div>
        
        {/* Mobile Drawer Menu */}
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-gray-50 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </DrawerTrigger>
          <DrawerContent className="h-full w-[280px] ml-auto mt-0 rounded-none">
            <DrawerHeader className="border-b">
              <DrawerTitle className="flex items-center gap-3">
                <img src="/Tradeneeti-Logo.png" alt="Logo" className="h-8 w-8" />
                <span className="text-lg font-bold">Tradeneeti</span>
              </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col p-4 space-y-4">
              {nav.map((item) =>
                item.href.startsWith("/") ? (
                  <DrawerClose asChild key={item.href}>
                    <Link
                      to={item.href}
                      className="flex items-center py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  </DrawerClose>
                ) : (
                  <DrawerClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  </DrawerClose>
                ),
              )}
              <div className="pt-4 border-t">
                <DrawerClose asChild>
                  <Link to="/contact">
                    <Button className="w-full rounded-full">
                      Request A Call
                    </Button>
                  </Link>
                </DrawerClose>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
