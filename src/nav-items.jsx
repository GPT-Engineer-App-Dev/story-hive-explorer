import { Home, Newspaper } from "lucide-react";
import LandingPage from "./pages/LandingPage.jsx";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Landing",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <LandingPage />,
  },
  {
    title: "HN Reader",
    to: "/app",
    icon: <Newspaper className="h-4 w-4" />,
    page: <Index />,
  },
];
