import { Icon } from "@iconify/react";
import type { TLinkDropdownItem } from "@/types/components.types";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface LinkDropdownProps {
  placeholder: string;
  items: TLinkDropdownItem[];
}

const LinkDropdown: React.FC<LinkDropdownProps> = ({ placeholder, items }) => {
  const [active, setActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside handler
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
      <button
        className="flex items-center gap-1 text-sm hover:text-blue-600 hover:underline cursor-pointer"
        onClick={() => setActive(!active)}
      >
        {placeholder}
        <Icon
          icon="solar:alt-arrow-down-linear"
          className={`w-4 h-4 ${
            active ? "rotate-180" : "rotate-0"
          } transition-all duration-150 ease-in-out`}
          color="black"
        />
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            className="absolute top-full left-0 mt-2 min-w-max z-50 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <motion.ul
              className="py-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    href={item.path}
                    className="flex flex-row items-center gap-2 px-4 py-2 text-sm group hover:bg-gray-200 transition-colors duration-150"
                    onClick={() => setActive(false)}
                  >
                    {item.icon && (
                      <Icon
                        icon={item.icon}
                        className="w-4 h-4"
                        color="black"
                      />
                    )}
                    <span>{item.label}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LinkDropdown;
