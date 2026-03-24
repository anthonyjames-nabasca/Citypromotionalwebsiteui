import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ChevronDown, MapPin, Compass, Calendar } from "lucide-react";
import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredAttractions = [
    {
      title: "Underground River",
      description: "UNESCO World Heritage Site - One of the New 7 Wonders of Nature",
      image: "https://images.unsplash.com/photo-1581216061628-2187b387eb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBQcmluY2VzYSUyMHVuZGVyZ3JvdW5kJTIwcml2ZXJ8ZW58MXx8fHwxNzc0MzE3MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Honda Bay",
      description: "Crystal clear waters perfect for island hopping and snorkeling",
      image: "https://images.unsplash.com/photo-1758782551912-80cf4c578220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Pristine Beaches",
      description: "White sand beaches surrounded by limestone cliffs",
      image: "https://images.unsplash.com/photo-1758745474056-ae3a209ce1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzc0MjI4NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Tropical Forest",
      description: "Lush biodiversity in the heart of the city",
      image: "https://images.unsplash.com/photo-1592303071869-882ab783e4ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZvcmVzdCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1594485770512-f206820b7cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWxhd2FuJTIwdHJvcGljYWwlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzQzMTcwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Puerto Princesa Beach Sunset"
            className="w-full h-[120vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              Puerto Princesa
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#F5E6D3] mb-8 sm:mb-12">
              The City in a Forest
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto"
          >
            Experience the perfect blend of pristine nature, rich culture, and
            eco-tourism in Palawan's capital city
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/attractions"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#0A5C4F] to-[#1A7A5E] text-white rounded-full font-medium text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Compass className="w-5 h-5" />
                Explore
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A7A5E] to-[#0A5C4F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/travel-guide"
              className="group px-8 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white/50 rounded-full font-medium text-base sm:text-lg hover:bg-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Plan Visit
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/80"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Attractions Carousel */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A5C4F] mb-4">
              Featured Attractions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the natural wonders that make Puerto Princesa a world-class
              destination
            </p>
          </motion.div>

          <div className="carousel-container">
            <Slider {...sliderSettings}>
              {featuredAttractions.map((attraction, index) => (
                <div key={index} className="px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <ImageWithFallback
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        {attraction.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/90">
                        {attraction.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Tourist Attractions",
                icon: MapPin,
                description: "Explore breathtaking natural wonders",
                link: "/attractions",
                color: "from-[#0A5C4F] to-[#1A7A5E]",
              },
              {
                title: "Events & Festivals",
                icon: Calendar,
                description: "Experience local culture and celebrations",
                link: "/events",
                color: "from-[#0891B2] to-[#0E7490]",
              },
              {
                title: "Travel Guide",
                icon: Compass,
                description: "Plan your perfect trip",
                link: "/travel-guide",
                color: "from-[#1A7A5E] to-[#0891B2]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={item.link}>
                  <div className="group relative h-full p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div className="relative z-10">
                      <div
                        className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4`}
                      >
                        <item.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0A5C4F] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
