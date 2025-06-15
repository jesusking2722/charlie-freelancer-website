import { TNavItem } from "@/components/templates/NavLayout";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export type TNavHoverItem = {
  label: string;
  path: string;
  categories: {
    title: TNavItem;
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
    <div className="fixed top-[80px] w-full z-[49] border-t-[1px] border-gray-300 bg-white">
      <div className="relative w-full mx-auto">
        {/* Navigation Bar */}
        <div className="py-4 w-[80%] mx-auto">
          <div className="mx-auto">
            <nav className="flex items-center space-x-8">
              {/* Project Catalog Title */}
              <div className="flex items-center space-x-6">
                <Link href={title.path} className="font-medium">
                  {title.label}
                </Link>
                <div className="w-px h-6 bg-gray-500"></div>
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
                      className={`text-sm transition-colors duration-200 ${
                        hoveredNav === index ? "text-blue-600" : ""
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
                className="absolute top-full left-0 right-0 bg-white border-t border-b border-gray-200 shadow-lg z-50 w-full"
                onMouseEnter={() => setHoveredNav(hoveredNav)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[80%] mx-auto px-6 py-8">
                  <div className="grid grid-cols-5 gap-8">
                    {navItems[hoveredNav].categories.map(
                      (category, categoryIndex) => (
                        <div
                          key={categoryIndex}
                          className="w-full flex flex-col gap-4"
                        >
                          <Link
                            href={category.title.path}
                            className="text-base font-semibold hover:text-blue-600"
                          >
                            {category.title.label}
                          </Link>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href={item.path}
                                  className="text-sm hover:underline transition-colors duration-150 block"
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
    </div>
  );
};

export default NavHoverDropdown;
