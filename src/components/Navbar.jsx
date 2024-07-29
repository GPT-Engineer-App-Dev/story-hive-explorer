import { Link, useLocation } from "react-router-dom";
import { navItems } from "../nav-items";

const Navbar = () => {
  const location = useLocation();

  // Only show navbar when not on the landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/app" className="text-xl font-bold">HN Reader</Link>
        <ul className="flex space-x-4">
          {navItems.filter(item => item.to !== '/').map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-gray-300 flex items-center">
                {item.icon}
                <span className="ml-1">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
