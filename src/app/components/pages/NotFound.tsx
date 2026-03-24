import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, MapPin, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0A5C4F] to-[#0891B2]">
              404
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MapPin className="w-16 h-16 mx-auto mb-6 text-[#0891B2]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F] mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Oops! Looks like you've wandered off the beaten path. Let's get you
              back to exploring Puerto Princesa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0A5C4F] to-[#1A7A5E] text-white rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>

            <Link
              to="/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-[#0A5C4F] border-2 border-[#0A5C4F]/20 rounded-full font-medium hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Compass className="w-5 h-5" />
              Explore Attractions
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
