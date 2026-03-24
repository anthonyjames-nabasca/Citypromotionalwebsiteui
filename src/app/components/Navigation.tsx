import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Waves } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/attractions", label: "Tourist Attractions" },
    { path: "/events", label: "Events" },
    { path: "/businesses", label: "Local Businesses" },
    { path: "/travel-guide", label: "Travel Guide" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg"
            : "bg-white/40 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-[#0A5C4F] to-[#0891B2] p-2 rounded-lg">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-[#0A5C4F]">
                  Puerto Princesa
                </span>
                <p className="text-xs text-[#0891B2]">City in a Forest</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-[#0A5C4F]"
                      : "text-gray-700 hover:text-[#0891B2]"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0A5C4F] to-[#0891B2]"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0A5C4F]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0A5C4F]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-16 right-0 bottom-0 w-full sm:w-80 bg-white/95 backdrop-blur-xl z-40 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      location.pathname === link.path
                        ? "bg-gradient-to-r from-[#0A5C4F] to-[#0891B2] text-white shadow-lg"
                        : "text-gray-700 hover:bg-[#F5E6D3]/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
