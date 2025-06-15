import { TNavItem } from "@/components/templates/NavLayout";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export type TNavHoverItem = {
  label: string;
  path: string;
  categories: {
    title: string;
    items: TNavItem[];
  }[];
};

interface NavHoverDropdownProps {
  title: TNavItem;
  navItems: TNavHoverItem[];
}

const NavHoverDropdown: React.FC<NavHoverDropdownProps> = ({
  title,
  navItems,
}) => {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredNav(index);
  };

  const handleMouseLeave = () => {
    setHoveredNav(null);
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-8">
            {/* Project Catalog Title */}
            <div className="flex items-center space-x-2">
              <Link href={title.path} className="text-gray-900 font-medium">
                {title.label}
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
            </div>

            {/* Navigation Items */}
            <ul className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      hoveredNav === index
                        ? "text-green-600"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {hoveredNav !== null &&
          navItems[hoveredNav]?.categories?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50"
              onMouseEnter={() => setHoveredNav(hoveredNav)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-5 gap-8">
                  {navItems[hoveredNav].categories.map(
                    (category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-3">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                href={item.path}
                                className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-150 block"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default NavHoverDropdown;
