import { useState } from "react";
import { motion } from "motion/react";
import { Store, Utensils, Hotel, ShoppingBag, Coffee, Palmtree } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function LocalBusinesses() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const businesses = [
    {
      id: 1,
      name: "Kalui Restaurant",
      category: "restaurant",
      description:
        "Iconic seafood restaurant offering fresh catch and traditional Filipino dishes in a unique bamboo setting.",
      image:
        "https://images.unsplash.com/photo-1758745474056-ae3a209ce1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzc0MjI4NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      priceRange: "$$",
    },
    {
      id: 2,
      name: "Sheridan Beach Resort & Spa",
      category: "hotel",
      description:
        "Premier beachfront resort featuring world-class amenities, spa services, and stunning ocean views.",
      image:
        "https://images.unsplash.com/photo-1743525922686-badbeac16a34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGhvdGVsJTIwcG9vbHxlbnwxfHx8fDE3NzQzMTcwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      priceRange: "$$$",
    },
    {
      id: 3,
      name: "Baker's Hill",
      category: "shop",
      description:
        "Famous bakery and theme park known for delicious hopia and pastries, beautiful gardens, and family-friendly attractions.",
      image:
        "https://images.unsplash.com/photo-1595572147956-94b1f6545298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1hcmtldCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4,
      priceRange: "$",
    },
    {
      id: 4,
      name: "KaLui Garden Cafe & Restaurant",
      category: "cafe",
      description:
        "Charming garden cafe serving organic coffee, smoothies, and healthy meals in a relaxing tropical setting.",
      image:
        "https://images.unsplash.com/photo-1767334573995-f243d608fc63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjByZXNvcnQlMjB0cm9waWNhbHxlbnwxfHx8fDE3NzQzMTcwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4,
      priceRange: "$$",
    },
    {
      id: 5,
      name: "Palawan Souvenir Shop",
      category: "shop",
      description:
        "Wide selection of local handicrafts, pearls, cashew products, and authentic Palawan souvenirs.",
      image:
        "https://images.unsplash.com/photo-1595572147956-94b1f6545298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1hcmtldCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4,
      priceRange: "$",
    },
    {
      id: 6,
      name: "Astoria Palawan",
      category: "hotel",
      description:
        "Modern boutique hotel in the city center offering comfortable rooms and convenient access to attractions.",
      image:
        "https://images.unsplash.com/photo-1743525922686-badbeac16a34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGhvdGVsJTIwcG9vbHxlbnwxfHx8fDE3NzQzMTcwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4,
      priceRange: "$$",
    },
    {
      id: 7,
      name: "Kinabuch's Grill and Bar",
      category: "restaurant",
      description:
        "Popular dining spot featuring grilled specialties, cocktails, and live entertainment in a vibrant atmosphere.",
      image:
        "https://images.unsplash.com/photo-1758745474056-ae3a209ce1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzc0MjI4NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4,
      priceRange: "$$",
    },
    {
      id: 8,
      name: "Island Tour Operators",
      category: "tour",
      description:
        "Professional tour services offering Underground River tours, island hopping, and customized adventure packages.",
      image:
        "https://images.unsplash.com/photo-1758782551912-80cf4c578220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      priceRange: "$$",
    },
    {
      id: 9,
      name: "Artcafe",
      category: "cafe",
      description:
        "Artistic cafe showcasing local art, serving specialty coffee, and offering a creative atmosphere for visitors.",
      image:
        "https://images.unsplash.com/photo-1767334573995-f243d608fc63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjByZXNvcnQlMjB0cm9waWNhbHxlbnwxfHx8fDE3NzQzMTcwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4,
      priceRange: "$",
    },
  ];

  const categories = [
    { id: "all", label: "All Businesses", icon: Store },
    { id: "restaurant", label: "Restaurants", icon: Utensils },
    { id: "hotel", label: "Hotels & Resorts", icon: Hotel },
    { id: "cafe", label: "Cafes", icon: Coffee },
    { id: "shop", label: "Shops", icon: ShoppingBag },
    { id: "tour", label: "Tour Operators", icon: Palmtree },
  ];

  const filteredBusinesses =
    selectedCategory === "all"
      ? businesses
      : businesses.filter((b) => b.category === selectedCategory);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1595572147956-94b1f6545298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1hcmtldCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Local Businesses"
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
            Local Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90"
          >
            Support Local, Experience Authentic
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
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#0A5C4F] to-[#0891B2] text-white shadow-lg scale-105"
                    : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">
                  {category.label.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F] mb-4">
              Discover Local Favorites
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience authentic hospitality and support the local community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredBusinesses.map((business, index) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full">
                    {business.priceRange}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#0A5C4F] group-hover:text-[#0891B2] transition-colors">
                      {business.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(business.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {business.description}
                  </p>

                  <div className="flex items-center gap-2">
                    {categories
                      .filter((c) => c.id === business.category)
                      .map((cat) => (
                        <div
                          key={cat.id}
                          className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#0A5C4F]/10 to-[#0891B2]/10 text-[#0A5C4F] text-xs font-medium rounded-full"
                        >
                          <cat.icon className="w-3 h-3" />
                          {cat.label}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A5C4F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
            <Store className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              List Your Business
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Are you a local business owner in Puerto Princesa? Join our directory
              and connect with tourists from around the world
            </p>
            <button className="px-8 py-4 bg-white text-[#0A5C4F] rounded-full font-medium hover:bg-[#F5E6D3] hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Listed
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
