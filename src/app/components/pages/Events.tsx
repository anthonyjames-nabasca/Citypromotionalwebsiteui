import { motion } from "motion/react";
import { Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function Events() {
  const events = [
    {
      id: 1,
      name: "Balayong Festival",
      date: "March 4-11, 2026",
      location: "City Center",
      description:
        "Puerto Princesa's biggest cultural celebration featuring street dancing, cultural shows, trade fairs, and vibrant parades celebrating the blooming of Balayong flowers.",
      image:
        "https://images.unsplash.com/photo-1746003625453-4b4cfaa0401b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZlc3RpdmFsJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0MzE3MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
      type: "Festival",
    },
    {
      id: 2,
      name: "Baragatan sa Palawan",
      date: "June 2026",
      location: "Provincial Capitol Complex",
      description:
        "Provincial celebration showcasing the diverse cultures of Palawan's municipalities through sports, arts, and cultural competitions.",
      image:
        "https://images.unsplash.com/photo-1758745474056-ae3a209ce1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzc0MjI4NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "Cultural",
    },
    {
      id: 3,
      name: "Feast of Immaculate Conception",
      date: "December 8, 2026",
      location: "Cathedral & City Streets",
      description:
        "Religious celebration honoring the city's patron saint with processions, masses, and community gatherings.",
      image:
        "https://images.unsplash.com/photo-1592303071869-882ab783e4ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZvcmVzdCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      type: "Religious",
    },
    {
      id: 4,
      name: "Earth Day Celebration",
      date: "April 22, 2026",
      location: "Various Venues",
      description:
        "Environmental activities including tree planting, coastal cleanups, and eco-forums highlighting Puerto Princesa's commitment to sustainability.",
      image:
        "https://images.unsplash.com/photo-1767334573995-f243d608fc63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjByZXNvcnQlMjB0cm9waWNhbHxlbnwxfHx8fDE3NzQzMTcwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "Environmental",
    },
    {
      id: 5,
      name: "Underground River Discovery Festival",
      date: "November 2026",
      location: "Sabang, Puerto Princesa",
      description:
        "Celebration of the Puerto Princesa Underground River's status as a UNESCO World Heritage Site and New 7 Wonder of Nature.",
      image:
        "https://images.unsplash.com/photo-1581216061628-2187b387eb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBQcmluY2VzYSUyMHVuZGVyZ3JvdW5kJTIwcml2ZXJ8ZW58MXx8fHwxNzc0MzE3MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      type: "Tourism",
    },
    {
      id: 6,
      name: "Palawan Food Festival",
      date: "May 2026",
      location: "Rizal Avenue",
      description:
        "Culinary showcase featuring local delicacies, seafood specialties, and traditional Palawan cuisine.",
      image:
        "https://images.unsplash.com/photo-1595572147956-94b1f6545298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1hcmtldCUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NDMxNzA0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      type: "Culinary",
    },
  ];

  const eventTypes = [
    { type: "Festival", color: "from-[#0A5C4F] to-[#1A7A5E]" },
    { type: "Cultural", color: "from-[#0891B2] to-[#0E7490]" },
    { type: "Religious", color: "from-[#1A7A5E] to-[#0A5C4F]" },
    { type: "Environmental", color: "from-[#0E7490] to-[#0891B2]" },
    { type: "Tourism", color: "from-[#0A5C4F] to-[#0891B2]" },
    { type: "Culinary", color: "from-[#1A7A5E] to-[#0E7490]" },
  ];

  const getEventColor = (type: string) => {
    return eventTypes.find((et) => et.type === type)?.color || "from-gray-500 to-gray-600";
  };

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1746003625453-4b4cfaa0401b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZlc3RpdmFsJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0MzE3MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Events and Festivals"
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
            Events & Festivals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90"
          >
            Experience the Vibrant Culture of Puerto Princesa
          </motion.p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-[#0A5C4F]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F]">
                Featured Event
              </h2>
            </div>
          </motion.div>

          {events
            .filter((event) => event.featured)
            .map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${getEventColor(
                      event.type
                    )} text-white text-sm font-medium rounded-full`}
                  >
                    {event.type}
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F] mb-4">
                    {event.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar className="w-5 h-5 text-[#0891B2]" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-[#0891B2]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <button className="px-6 py-3 bg-gradient-to-r from-[#0A5C4F] to-[#0891B2] text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A5C4F] mb-4">
              Annual Events Calendar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us throughout the year for exciting celebrations and cultural experiences
            </p>
          </motion.div>

          <div className="space-y-8">
            {events
              .filter((event) => !event.featured)
              .map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getEventColor(
                          event.type
                        )} text-white text-sm font-medium rounded-full`}
                      >
                        {event.type}
                      </div>
                    </div>

                    <div className="md:col-span-2 p-6 lg:p-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0A5C4F] mb-3">
                        {event.name}
                      </h3>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="w-4 h-4 text-[#0891B2]" />
                          <span className="text-sm font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <MapPin className="w-4 h-4 text-[#0891B2]" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline connector (hidden on mobile) */}
                  {index < events.filter((e) => !e.featured).length - 1 && (
                    <div className="hidden md:block absolute left-1/2 bottom-0 w-0.5 h-8 bg-gradient-to-b from-[#0A5C4F] to-transparent transform translate-y-full" />
                  )}
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#0A5C4F] to-[#0891B2] rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
          >
            <Users className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Don't Miss Out!
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Plan your visit around these exciting events and experience the rich
              culture and warm hospitality of Puerto Princesa
            </p>
            <a
              href="/travel-guide"
              className="inline-block px-8 py-4 bg-white text-[#0A5C4F] rounded-full font-medium hover:bg-[#F5E6D3] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Plan Your Visit
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
