import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import TouristAttractions from "./components/pages/TouristAttractions";
import Events from "./components/pages/Events";
import LocalBusinesses from "./components/pages/LocalBusinesses";
import TravelGuide from "./components/pages/TravelGuide";
import NotFound from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "attractions", Component: TouristAttractions },
      { path: "events", Component: Events },
      { path: "businesses", Component: LocalBusinesses },
      { path: "travel-guide", Component: TravelGuide },
      { path: "*", Component: NotFound },
    ],
  },
]);