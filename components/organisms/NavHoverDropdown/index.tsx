import { TNavItem } from "@/components/templates/NavLayout";
import Link from "next/link";

export type TNavHoverDropdownItem = {
  title: TNavItem;
  dropdowns: TNavItem[];
};

interface NavHoverDropdownProps {
  headTitle: TNavItem;
  navs: TNavHoverDropdownItem[];
}

const NavHoverDropdown: React.FC<NavHoverDropdownProps> = ({
  headTitle,
  navs,
}) => {
  return (
    <div className="fixed top-[80px] w-full p-6 z-[49] border-t-[1px] border-gray-300 bg-white">
      <nav className="w-[70%] mx-auto flex flex-row items-center gap-4 fixed">
        {/* Title */}
        {headTitle && (
          <Link
            href={headTitle.path}
            className="text-lg font-semibold px-4 border-r border-r-gray-500"
          >
            {headTitle.label}
          </Link>
        )}

        {/* Nav Items */}
        <ul className="flex flex-row items-center gap-4 px-4">
          {navs.map((nav, index) => (
            <li key={index}>
              <Link href={nav.title.path} className="text-sm">
                {nav.title.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Dropdown options showing at hovering nav */}
      <div className="w-[70%] mx-auto z-50 grid grid-cols-6 gap-10">
        {navs.map((nav, index) => (
          <div className="w-full flex flex-col items-start gap-"></div>
        ))}
      </div>
    </div>
  );
};

export default NavHoverDropdown;
