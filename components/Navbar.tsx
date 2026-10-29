"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { profile } from "@/data/profile";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/courses", label: "Courses" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <nav
            className={`flex items-center justify-between rounded-full px-4 py-3 md:px-6 transition-colors duration-300 ${
              scrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm border border-border"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center font-serif text-xl overflow-hidden relative">
                <span className="relative z-10">M</span>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="font-heading font-bold text-sm tracking-tight text-primary">
                  {profile.name}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 bg-background/50 rounded-full p-1 border border-border/50">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-2 text-xs font-medium bg-success/10 text-success px-3 py-1.5 rounded-full border border-success/20">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Ready To Freelance
              </div>
              <a
                href={profile.whatsapp || "https://wa.me/252614293433"}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-emerald-600 transition-colors shadow-sm"
              >
                Quick Contact
              </a>
              <button
                className="lg:hidden p-2 text-primary"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <div className="w-6 h-0.5 bg-current mb-1.5" />
                <div className="w-6 h-0.5 bg-current" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between p-6">
            <Link href="/" className="font-serif text-2xl text-primary" onClick={() => setMobileMenuOpen(false)}>
              M.
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-primary"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="flex flex-col px-6 pt-8 gap-6">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-4xl font-heading font-bold ${
                    pathname === link.href ? "text-accent-blue" : "text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-auto p-6 pb-12">
            <a
              href={profile.whatsapp || "https://wa.me/252614293433"}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 text-white bg-primary rounded-full font-medium hover:bg-emerald-600 transition-colors"
            >
              Quick Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
