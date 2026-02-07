import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="gradient-navy">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Best Packers and Movers"
                className="h-12 w-auto rounded-md"
              />
            </div>
            <p className="max-w-sm text-sm text-primary-foreground/60 leading-relaxed">
              Your most trusted packing and moving partner in Guntur, Andhra Pradesh.
              We provide safe, reliable, and affordable relocation services for households
              and offices — available 24 hours a day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-secondary uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-secondary uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                <div>
                  <a
                    href="tel:9700067784"
                    className="block text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                  >
                    97000 67784
                  </a>
                  <a
                    href="tel:6301409282"
                    className="block text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                  >
                    63014 09282
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/60">
                  Vishnu Nagar 3rd Line, Nagaralu, Amaravati Road, Guntur - 522034, AP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Best Packers &amp; Movers. All rights reserved. Proprietor: Vasanth M
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
