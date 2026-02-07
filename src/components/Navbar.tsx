import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-premium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Best Packers and Movers Logo"
            className="h-12 w-auto md:h-14 rounded-md"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 font-display text-sm font-semibold tracking-wide text-primary-foreground/90 transition-colors hover:text-secondary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:9700067784"
            className="ml-4 flex items-center gap-2 rounded-full gradient-orange px-5 py-2.5 font-display text-sm font-bold text-primary-foreground shadow-glow-orange transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-primary-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden gradient-navy md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 pb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg px-4 py-3 font-display text-sm font-semibold text-primary-foreground/90 transition-colors hover:bg-primary/30 hover:text-secondary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:9700067784"
                className="mt-2 flex items-center justify-center gap-2 rounded-full gradient-orange px-5 py-3 font-display text-sm font-bold text-primary-foreground shadow-glow-orange"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
