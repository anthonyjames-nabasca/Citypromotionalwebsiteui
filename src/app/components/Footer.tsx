import { Link } from "react-router";
import { Waves, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: "Tourist Attractions", path: "/attractions" },
      { label: "Events & Festivals", path: "/events" },
      { label: "Local Businesses", path: "/businesses" },
      { label: "Travel Guide", path: "/travel-guide" },
    ],
    about: [
      { label: "About Puerto Princesa", path: "/about" },
      { label: "Contact Us", path: "/travel-guide" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-[#0A5C4F] to-[#0891B2] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-semibold">Puerto Princesa</span>
                <p className="text-xs text-white/80">City in a Forest</p>
              </div>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Experience the perfect blend of pristine nature, rich culture, and
              eco-tourism in Palawan's capital city.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  Rizal Avenue, Puerto Princesa City, Palawan, Philippines
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm text-white/80">(048) 433-2968</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  tourism@puertoprincesa.ph
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80 text-center md:text-left">
              © {currentYear} Puerto Princesa City Tourism. All rights reserved.
            </p>
            <p className="text-sm text-white/80">
              Designed with ❤️ for sustainable tourism
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
