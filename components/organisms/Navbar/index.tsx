import { INavItem } from "@/types/components.types";
import Link from "next/link";

interface NavbarProps {
  navItems: INavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  return (
    <nav className="flex flex-row items-center gap-4">
      {navItems.map((item, index) => (
        <>
          <Link
            href={item.path}
            key={index}
            className="text-black hover:text-[#2563eb]"
          >
            {item.label}
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
