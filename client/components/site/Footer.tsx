import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, BookOpen, GraduationCap, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
      { label: "Success Stories", href: "/about" },
    ],
  },
  {
    title: "Courses",
    links: [
      { label: "All Courses", href: "/courses" },
      { label: "Master Class", href: "/master-class" },
      { label: "Programs", href: "/courses" },
      { label: "Course Details", href: "/courses" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Support", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background border-t border-border">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>



      {/* Bottom Bar */}
      <div className="relative border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container-tight py-6 md:py-8">
          <motion.div
            className="flex flex-col gap-4 md:flex-row items-center justify-between text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-primary font-semibold">Tradeneeti</span>. All rights reserved.
            </p>
            <nav className="flex items-center gap-6 flex-wrap justify-center">
              <Link
                to="/refund-policy"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                Refund Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                Privacy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                Terms
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              <motion.a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                Security
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
          </nav>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
