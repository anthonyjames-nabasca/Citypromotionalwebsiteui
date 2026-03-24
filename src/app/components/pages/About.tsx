import { motion } from "motion/react";
import { Users, Award, TreePine, Heart } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function About() {
  const stats = [
    { icon: Users, value: "300K+", label: "Population" },
    { icon: TreePine, value: "89%", label: "Forest Cover" },
    { icon: Award, value: "UNESCO", label: "World Heritage" },
    { icon: Heart, value: "#1", label: "Eco-Tourism City" },
  ];

  const values = [
    {
      title: "Environmental Sustainability",
      description:
        "Puerto Princesa is committed to preserving its natural beauty and biodiversity through sustainable tourism practices and environmental protection programs.",
      icon: TreePine,
    },
    {
      title: "Cultural Heritage",
      description:
        "Rich in history and traditions, our city celebrates the diverse cultures of indigenous communities and the warmth of Filipino hospitality.",
      icon: Users,
    },
    {
      title: "World-Class Tourism",
      description:
        "Home to the Underground River, one of the New 7 Wonders of Nature, we offer unforgettable experiences in pristine natural settings.",
      icon: Award,
    },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758782551916-1723a9cd00eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWxhd2FuJTIwYmVhY2glMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3NDMxNzA0NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Puerto Princesa Aerial View"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            About Puerto Princesa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90"
          >
            Where Nature and Progress Thrive Together
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A5C4F] to-[#0891B2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Split Layout */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F] mb-6">
                The City in a Forest
              </h2>
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Puerto Princesa is a highly urbanized city in Palawan,
                  Philippines, renowned for its exceptional environmental
                  stewardship and sustainable tourism practices. Known as the
                  "City in a Forest," it maintains an impressive 89% forest cover
                  while serving as the capital of Palawan province.
                </p>
                <p>
                  The city is home to the Puerto Princesa Subterranean River
                  National Park, a UNESCO World Heritage Site and one of the New 7
                  Wonders of Nature. This 8.2-kilometer underground river features
                  stunning limestone karst landscapes and diverse ecosystems.
                </p>
                <p>
                  With a commitment to eco-tourism, Puerto Princesa has become a
                  model for sustainable urban development in Southeast Asia,
                  balancing economic growth with environmental conservation and
                  cultural preservation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592303071869-882ab783e4ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZvcmVzdCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Puerto Princesa Forest"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes Puerto Princesa a unique and sustainable destination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#0A5C4F] to-[#0891B2] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5C4F] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <ImageWithFallback
                src="https://citytourism.puertoprincesa.ph/wp-content/uploads/2025/05/Spanish-rule.jpg"
                alt="Limestone Cliffs"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F] mb-6">
                Rich History & Heritage
              </h2>
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Named after Princess Eulalia of Spain, Puerto Princesa has a
                  fascinating history dating back to pre-colonial times when it was
                  inhabited by the Tagbanua and other indigenous groups.
                </p>
                <p>
                  The city played a significant role during World War II and has
                  evolved into a modern urban center while preserving its cultural
                  heritage and natural environment. Today, it stands as a testament
                  to sustainable development and environmental consciousness.
                </p>
                <p>
                  From the historic Immaculate Conception Cathedral to the vibrant
                  local markets, Puerto Princesa seamlessly blends its past with a
                  progressive vision for the future.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
