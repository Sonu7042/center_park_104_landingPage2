import React from "react";
import { Link } from "react-scroll";
import building from '../assets/buiding.jpg'
import centralparklogo from '../assets/centralparklogo.png'

const Header = () => {
  const navItems = [
    { label: "Home", path: "home" },
    { label: "Overview", path: "overview" },
    { label: "Highlights", path: "highlights" },
    { label: "Price", path: "price" },
    { label: "Amenities", path: "amenities" },
    { label: "Location", path: "location" },
    { label: "Contact", path: "contactus" },
    
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 shadow-lg bg-white">
      <div className="">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={centralparklogo} className="h-9 w-9 rounded-full object-cover ring-2 ring-black/30" />
            <span className="text-lg font-semibold tracking-wide">
              Central Park 104
            </span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                smooth={true}
                duration={600}
                offset={-70} // header height adjust
                className="cursor-pointer text-sm text-black hover:text-black transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
