import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-transparent.png";
import { allServices } from "@/data/services";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 200);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-premium"
          : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Best Packers and Movers Logo" className="h-14 w-auto md:h-16" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              ref={link.hasDropdown ? dropdownRef : undefined}
              onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
              onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
            >
              <Link
                to={link.href}
                className={`relative flex items-center gap-1 px-4 py-2 font-display text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === link.href || (link.hasDropdown && location.pathname.startsWith("/services"))
                    ? "text-secondary"
                    : "text-primary-foreground/90 hover:text-secondary"
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                )}
                {(location.pathname === link.href || (link.hasDropdown && location.pathname.startsWith("/services"))) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-secondary"
                  />
                )}
              </Link>

              {/* Desktop Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                    >
                      <div className="w-72 overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                        <div className="p-2">
                          <Link
                            to="/services"
                            className="mb-1 block rounded-lg px-4 py-2.5 font-display text-sm font-bold text-foreground transition-colors hover:bg-secondary/10 hover:text-secondary"
                          >
                            All Services →
                          </Link>
                          <div className="my-1 h-px bg-border" />
                          {allServices.map((s) => {
                            const Icon = s.icon;
                            return (
                              <Link
                                key={s.id}
                                to={`/services/${s.slug}`}
                                className={`flex items-center gap-3 rounded-lg px-4 py-2.5 transition-colors hover:bg-secondary/10 ${
                                  location.pathname === `/services/${s.slug}`
                                    ? "bg-secondary/10 text-secondary"
                                    : "text-foreground"
                                }`}
                              >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                  <Icon className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <span className="font-display text-sm font-semibold">{s.title}</span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
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
          className="text-primary-foreground lg:hidden"
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
            className="overflow-hidden gradient-navy lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 pb-6">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href}>
                    <div className="flex items-center">
                      <Link
                        to={link.href}
                        className={`flex-1 rounded-lg px-4 py-3 font-display text-sm font-semibold transition-colors ${
                          location.pathname.startsWith("/services")
                            ? "bg-primary/30 text-secondary"
                            : "text-primary-foreground/90 hover:bg-primary/30 hover:text-secondary"
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="rounded-lg p-3 text-primary-foreground/90 hover:text-secondary"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-secondary/30 pl-4 pb-2">
                            {allServices.map((s) => {
                              const Icon = s.icon;
                              return (
                                <Link
                                  key={s.id}
                                  to={`/services/${s.slug}`}
                                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                                    location.pathname === `/services/${s.slug}`
                                      ? "text-secondary"
                                      : "text-primary-foreground/70 hover:text-secondary"
                                  }`}
                                >
                                  <Icon className="h-3.5 w-3.5" />
                                  {s.title}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`rounded-lg px-4 py-3 font-display text-sm font-semibold transition-colors ${
                      location.pathname === link.href
                        ? "bg-primary/30 text-secondary"
                        : "text-primary-foreground/90 hover:bg-primary/30 hover:text-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
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
