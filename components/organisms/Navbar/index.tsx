import { useTheme } from "@/contexts/ThemeContext";
import { INavItem } from "@/types/components.types";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  navItems: INavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <nav className="flex flex-row items-center gap-6 relative">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.path}
            className={`${
              theme === "dark"
                ? "text-white hover:text-blue-500"
                : "text-black hover:text-blue-600"
            } cursor-pointer flex items-center gap-1 text-sm transition-colors duration-200`}
          >
            {item.label}
            {item.children && (
              <motion.div
                animate={{ rotate: hoveredIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Icon
                  icon="solar:alt-arrow-down-line-duotone"
                  className="w-4 h-4"
                  color={theme === "dark" ? "white" : "black"}
                />
              </motion.div>
            )}
          </Link>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {item.children && hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`fixed top-[70px] left-0 mt-2 w-full z-50 border-t-[1px] border-t-gray-300 shadow-md ${
                  theme === "dark" ? "bg-black" : "bg-white"
                }`}
              >
                <div className="w-[75%] mx-auto py-8">{item.children}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
