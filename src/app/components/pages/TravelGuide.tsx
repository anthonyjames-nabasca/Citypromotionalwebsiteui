import { motion } from "motion/react";
import {
  Plane,
  Car,
  Ship,
  MapPin,
  Info,
  AlertCircle,
  Phone,
  Mail,
  Clock,
  DollarSign,
  Umbrella,
  Heart,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function TravelGuide() {
  const transportOptions = [
    {
      icon: Plane,
      title: "By Air",
      description:
        "Puerto Princesa International Airport (PPS) has daily flights from Manila, Cebu, and other major cities. Flight time from Manila is approximately 1.5 hours.",
      color: "from-[#0A5C4F] to-[#1A7A5E]",
    },
    {
      icon: Ship,
      title: "By Sea",
      description:
        "2GO Travel offers ferry services from Manila to Puerto Princesa. The journey takes approximately 24-30 hours and provides a scenic ocean voyage.",
      color: "from-[#0891B2] to-[#0E7490]",
    },
    {
      icon: Car,
      title: "Getting Around",
      description:
        "Tricycles, jeepneys, and rental vehicles are readily available. Van rentals are recommended for island tours and longer trips to attractions.",
      color: "from-[#1A7A5E] to-[#0891B2]",
    },
  ];

  const travelTips = [
    {
      icon: Clock,
      title: "Best Time to Visit",
      description:
        "November to May (dry season) is ideal. December to February offers cooler weather, while March to May is warmer but less crowded.",
    },
    {
      icon: DollarSign,
      title: "Currency & Payments",
      description:
        "Philippine Peso (PHP) is the official currency. ATMs are available in the city. Cards accepted at major establishments; cash preferred for smaller vendors.",
    },
    {
      icon: Umbrella,
      title: "What to Bring",
      description:
        "Sunscreen, insect repellent, light clothing, swimwear, comfortable walking shoes, and waterproof bags for island tours. Don't forget your camera!",
    },
    {
      icon: Heart,
      title: "Responsible Tourism",
      description:
        "Respect marine life, avoid single-use plastics, support local businesses, and follow environmental guidelines at protected sites.",
    },
    {
      icon: AlertCircle,
      title: "Health & Safety",
      description:
        "Travel insurance recommended. Bring basic medications. Tap water is not potable; buy bottled water. Emergency hotline: 117 or (048) 433-2152.",
    },
    {
      icon: Info,
      title: "Permits & Bookings",
      description:
        "Underground River tours require advance booking (book 2-3 days ahead). Some attractions need permits; check with your tour operator.",
    },
  ];

  const essentialInfo = [
    { label: "Airport Code", value: "PPS" },
    { label: "Time Zone", value: "GMT+8" },
    { label: "Language", value: "Filipino, English" },
    { label: "Electricity", value: "220V, 60Hz" },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1594485770512-f206820b7cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWxhd2FuJTIwdHJvcGljYWwlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzQzMTcwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel Guide"
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
            Travel Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90"
          >
            Everything You Need to Plan Your Perfect Trip
          </motion.p>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A5C4F] to-[#0891B2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {essentialInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl"
              >
                <div className="text-sm text-white/80 mb-2">{info.label}</div>
                <div className="text-lg sm:text-xl font-bold text-white">
                  {info.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F] mb-4">
              Getting to Puerto Princesa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the best way to reach your tropical paradise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${option.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <option.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A5C4F] mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F] mb-4">
              Explore the Area
            </h2>
            <p className="text-lg text-gray-600">
              Interactive map of Puerto Princesa and surrounding attractions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758782551916-1723a9cd00eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWxhd2FuJTIwYmVhY2glMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3NDMxNzA0NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Puerto Princesa Map"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#0A5C4F] mx-auto mb-4" />
                <p className="text-xl font-medium text-[#0A5C4F]">
                  Interactive Map Coming Soon
                </p>
                <p className="text-gray-600 mt-2">
                  Explore attractions, hotels, and restaurants
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F] mb-4">
              Essential Travel Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make the most of your Puerto Princesa adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {travelTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-[#0A5C4F] to-[#0891B2] text-white mb-4">
                  <tip.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A5C4F] mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Emergency */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5E6D3] to-[#E5F6F8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <Phone className="w-12 h-12 text-[#0A5C4F] mb-4" />
              <h3 className="text-2xl font-bold text-[#0A5C4F] mb-4">
                Emergency Contacts
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-medium">Emergency Hotline:</span> 117
                </p>
                <p>
                  <span className="font-medium">Police:</span> (048) 433-2152
                </p>
                <p>
                  <span className="font-medium">Hospital:</span> Adventist Hospital
                  Puerto Princesa
                </p>
                <p>
                  <span className="font-medium">Coast Guard:</span> (048) 434-7318
                </p>
              </div>
            </div>

            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <Mail className="w-12 h-12 text-[#0A5C4F] mb-4" />
              <h3 className="text-2xl font-bold text-[#0A5C4F] mb-4">
                Tourist Information
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-medium">City Tourism Office:</span> Rizal
                  Avenue, Puerto Princesa
                </p>
                <p>
                  <span className="font-medium">Phone:</span> (048) 433-2968
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  tourism@puertoprincesa.ph
                </p>
                <p>
                  <span className="font-medium">Office Hours:</span> Mon-Fri, 8AM -
                  5PM
                </p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for Your Adventure?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Start exploring the breathtaking attractions and experiences Puerto
              Princesa has to offer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/attractions"
                className="px-8 py-4 bg-white text-[#0A5C4F] rounded-full font-medium hover:bg-[#F5E6D3] hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View Attractions
              </a>
              <a
                href="/events"
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white/50 rounded-full font-medium hover:bg-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Upcoming Events
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
