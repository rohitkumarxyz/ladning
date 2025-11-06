import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
  { label: "Master Class", href: "/master-class", isLive: true },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

// Live Class Indicator Component
function LiveIndicator() {
  return (
    <motion.div
      className="relative flex items-center gap-1.5 ml-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Pulsing dot */}
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing ring */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-red-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Inner solid dot */}
        <div className="relative w-2 h-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
      </div>
      {/* Live text */}
      <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
        Live
      </span>
    </motion.div>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center gap-px no-underline group", className)}
      aria-label="Tradeneeti Home"
    >
      <div className="relative flex items-center">
        <img 
          src="/logo.png" 
          alt="T Logo" 
          className="h-16 w-16 md:h-20 md:w-20 "
        />
      <span className=" ml-[-25px] text-xl md:text-2xl font-extrabold tracking-tight no-underline bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent ">
        RADENEETI
      </span>
</div>
    </Link>
  );
}

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-lg shadow-primary/5">
      {/* Premium top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        <Logo />
        
        {/* Premium Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {nav.map((item) => {
            const isActive = location.pathname === item.href;
            return item.href.startsWith("/") ? (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "relative text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 group px-3 py-2 rounded-lg",
                  isActive
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                <span className="relative z-10 flex items-center">
                  {item.label}
                  {item.isLive && <LiveIndicator />}
                </span>
                {/* Active indicator */}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Hover background */}
                <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {/* Underline effect */}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm lg:text-base font-semibold tracking-wide text-foreground/80 hover:text-primary transition-all duration-300 group px-3 py-2 rounded-lg"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </a>
            );
          })}
        </nav>
        
        {/* Premium CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="relative rounded-full px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 overflow-hidden group btn-anim"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative z-10">Request A Call</span>
              </Button>
            </motion.div>
          </Link>
        </div>
        
        {/* Premium Mobile Drawer Menu */}
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground group-hover:text-primary transition-colors"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </motion.button>
          </DrawerTrigger>
          <DrawerContent className="h-full w-[320px] ml-auto mt-0 rounded-none border-l border-border bg-background/95 backdrop-blur-xl">
            <DrawerHeader className="border-b border-border/50 px-6 py-6 bg-gradient-to-r from-primary/5 to-transparent">
              <DrawerTitle className="flex items-center gap-px">
                <div className="relative flex items-center">
                  <img src="/logo.png" alt="T Logo" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
                  <span className="ml-[-25px] text-2xl font-extrabold tracking-tight no-underline bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary/90 group-hover:to-primary transition-all duration-300 leading-none">
                    RADENEETI
                  </span>
                </div>
              </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col p-6 space-y-2">
              {nav.map((item) => {
                const isActive = location.pathname === item.href;
                return item.href.startsWith("/") ? (
                  <DrawerClose asChild key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center py-4 px-5 text-base font-semibold rounded-xl transition-all duration-300 group relative",
                        isActive
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "text-foreground hover:bg-card hover:text-primary border border-transparent hover:border-primary/20"
                      )}
                    >
                      <span className="relative z-10 flex items-center">
                        {item.label}
                        {item.isLive && <LiveIndicator />}
                      </span>
                      <motion.span
                        className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </DrawerClose>
                ) : (
                  <DrawerClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center py-4 px-5 text-base font-semibold text-foreground hover:bg-card hover:text-primary rounded-xl transition-all duration-300 border border-transparent hover:border-primary/20 group relative"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <motion.span
                        className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.span>
                    </a>
                  </DrawerClose>
                );
              })}
              <div className="pt-6 border-t border-border/50 mt-4">
                <DrawerClose asChild>
                  <Link to="/contact">
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 btn-anim">
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
