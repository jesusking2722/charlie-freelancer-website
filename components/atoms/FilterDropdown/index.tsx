import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "motion/react";

interface FilterDropdownProps {
  placeholder: string;
  children: React.ReactNode;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  placeholder,
  children,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        className={`flex items-center gap-4 py-2 px-4 text-sm cursor-pointer border rounded-lg transition-all duration-150 hover:outline-none hover:ring-2 hover:ring-black hover:border-transparent ${
          active
            ? "outline-none ring-2 ring-black border-transparent text-black"
            : "border-gray-400 text-gray-600 outline-none"
        }`}
        onClick={() => setActive(!active)}
      >
        {placeholder}
        <Icon
          icon="solar:alt-arrow-down-linear"
          className={`w-5 h-5 ${
            active ? "rotate-180" : "rotate-0"
          } transition-all duration-150`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="absolute top-full left-0 mt-2 min-w-max z-50 bg-white border border-gray-300 rounded-xl shadow-2xl overflow-hidden p-6"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;
