import { useEffect } from "react";
import { useLocation } from "react-router";

export default function PageTransition() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}
