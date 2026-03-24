import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import PageTransition from "./PageTransition";

/**
 * Puerto Princesa City Promotional Website
 * 
 * Chosen City: Puerto Princesa, Palawan
 * 
 * Design Theme: Eco-Tourism Tropical Luxury
 * - Colors: Deep Green (#0A5C4F, #1A7A5E), Ocean Blue (#0891B2, #0E7490), Sand Tones (#F5E6D3, #E5D4BC)
 * - Glassmorphism effects with backdrop-blur
 * - Soft shadows and smooth spacing
 * - Responsive: Desktop (1440px), Tablet (768px), Mobile (375px)
 * - Grid System: 12-col desktop, 8-col tablet, 4-col mobile
 * 
 * Features:
 * - Sticky transparent navigation with glassmorphism
 * - Mobile hamburger menu with slide animation
 * - Hero section with parallax effect
 * - Featured attractions carousel
 * - Interactive animations (fade-in, hover zoom, micro-interactions)
 * - Fully responsive layouts
 * 
 * Pages:
 * - Home: Hero section, carousel, quick links
 * - About: Split layout with fade-in animations
 * - Tourist Attractions: Grid cards with hover zoom
 * - Events: Timeline with Balayong Festival featured
 * - Local Businesses: Categorized listings with filters
 * - Travel Guide: Map placeholder, transport info, travel tips
 */

export default function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] via-white to-[#E5F6F8]">
      <PageTransition />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}