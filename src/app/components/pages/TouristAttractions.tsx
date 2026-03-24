import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Star, Clock, Waves } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function TouristAttractions() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const attractions = [
    {
      id: 1,
      name: "Puerto Princesa Underground River",
      category: "nature",
      rating: 5,
      duration: "Full Day",
      description:
        "A UNESCO World Heritage Site featuring an 8.2km navigable underground river through stunning limestone caves.",
      image:
        "https://images.unsplash.com/photo-1581216061628-2187b387eb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBQcmluY2VzYSUyMHVuZGVyZ3JvdW5kJTIwcml2ZXJ8ZW58MXx8fHwxNzc0MzE3MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlight: true,
    },
    {
      id: 2,
      name: "Honda Bay",
      category: "island",
      rating: 5,
      duration: "Half Day",
      description:
        "Crystal-clear waters perfect for island hopping, snorkeling, and swimming among colorful marine life.",
      image:
        "https://images.unsplash.com/photo-1758782551912-80cf4c578220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      highlight: true,
    },
    {
      id: 3,
      name: "Sabang Beach",
      category: "beach",
      rating: 4,
      duration: "Half Day",
      description:
        "A serene beach destination near the Underground River with pristine white sand and clear waters.",
      image:
        "https://images.unsplash.com/photo-1594485770512-f206820b7cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWxhd2FuJTIwdHJvcGljYWwlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzQzMTcwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "Baker's Hill",
      category: "cultural",
      rating: 4,
      duration: "2-3 Hours",
      description:
        "A theme park and bakery featuring beautiful gardens, playground, and the famous hopia pastries.",
      image:
        "https://images.unsplash.com/photo-1592303071869-882ab783e4ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZvcmVzdCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      name: "Iwahig Firefly Watching",
      category: "nature",
      rating: 5,
      duration: "2-3 Hours",
      description:
        "Experience magical evening tours along the Iwahig River to see thousands of fireflies illuminating the mangroves.",
      image:
        "https://zsarkpalawantravelandtours.com/wp-content/uploads/2024/12/Firefly-1-300x198.jpg",
    },
    {
      id: 6,
      name: "Mitra's Ranch",
      category: "cultural",
      rating: 4,
      duration: "2-3 Hours",
      description:
        "Panoramic hilltop views of the city and surrounding islands with recreational activities and horseback riding.",
      image:
        "https://images.unsplash.com/photo-1767334573995-f243d608fc63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjByZXNvcnQlMjB0cm9waWNhbHxlbnwxfHx8fDE3NzQzMTcwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 7,
      name: "Palawan Wildlife Rescue",
      category: "nature",
      rating: 5,
      duration: "2-3 Hours",
      description:
        "Conservation center showcasing rescued endemic species including the Palawan bearcat and crocodiles.",
      image:
        "https://images.unsplash.com/photo-1592303071869-882ab783e4ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZvcmVzdCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 8,
      name: "Nagtabon Beach",
      category: "beach",
      rating: 4,
      duration: "Half Day",
      description:
        "A favorite among surfers and beach lovers, known for its golden sand and laid-back atmosphere.",
      image:
        "https://images.unsplash.com/photo-1758745474056-ae3a209ce1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzc0MjI4NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 9,
      name: "Snake Island",
      category: "island",
      rating: 5,
      duration: "Half Day",
      description:
        "Famous sandbar forming an S-shape during low tide, connecting to a small island with stunning views.",
      image:
        "https://images.unsplash.com/photo-1758782551916-1723a9cd00eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWxhd2FuJTIwYmVhY2glMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3NDMxNzA0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const categories = [
    { id: "all", label: "All Attractions" },
    { id: "nature", label: "Nature & Wildlife" },
    { id: "beach", label: "Beaches" },
    { id: "island", label: "Island Hopping" },
    { id: "cultural", label: "Cultural Sites" },
  ];

  const filteredAttractions =
    selectedCategory === "all"
      ? attractions
      : attractions.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758782551916-1723a9cd00eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWxhd2FuJTIwYmVhY2glMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3NDMxNzA0NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tourist Attractions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Tourist Attractions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90"
          >
            Discover Natural Wonders and Cultural Gems
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm sticky top-16 lg:top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#0A5C4F] to-[#0891B2] text-white shadow-lg scale-105"
                    : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  attraction.highlight ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {attraction.highlight && (
                    <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-[#0A5C4F] to-[#0891B2] text-white text-sm font-medium rounded-full backdrop-blur-sm">
                      Must Visit
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#F5E6D3]" />
                    <span className="text-sm text-[#F5E6D3]">
                      {attraction.category.charAt(0).toUpperCase() +
                        attraction.category.slice(1)}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {attraction.name}
                  </h3>

                  <p className="text-sm text-white/90 mb-4 line-clamp-2">
                    {attraction.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(attraction.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Clock className="w-4 h-4" />
                      {attraction.duration}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A5C4F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A5C4F] to-[#0891B2]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Waves className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Explore?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Start planning your unforgettable adventure in Puerto Princesa
            </p>
            <a
              href="/travel-guide"
              className="inline-block px-8 py-4 bg-white text-[#0A5C4F] rounded-full font-medium hover:bg-[#F5E6D3] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Travel Guide
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
