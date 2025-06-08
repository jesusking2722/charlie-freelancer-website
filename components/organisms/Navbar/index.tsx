import { useTheme } from "@/contexts/ThemeContext";
import { INavItem } from "@/types/components.types";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface NavbarProps {
  navItems: INavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const { theme } = useTheme();

  return (
    <nav className="flex flex-row items-center gap-4">
      {navItems.map((item, index) => (
        <>
          <Link
            href={item.path}
            key={index}
            className={`${
              theme === "dark"
                ? "text-white hover:text-blue-500"
                : "text-black hover:text-blue-600"
            } cursor-pointer flex items-center gap-1 text-base`}
          >
            {item.label}
            {item.children && (
              <Icon
                icon={
                  item.active
                    ? "solar:alt-arrow-up-line-duotone"
                    : "solar:alt-arrow-down-line-duotone"
                }
                className="w-4 h-4"
                color={theme === "dark" ? "white" : "black"}
              />
            )}
          </Link>
          {item.active && item.children && (
            <div className="fixed top-[80px] left-0 right-0 w-full">
              {item.children}
            </div>
          )}
        </>
      ))}
    </nav>
  );
};

export default Navbar;
