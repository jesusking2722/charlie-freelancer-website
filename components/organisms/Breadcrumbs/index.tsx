import { TNavItem } from "@/components/templates/NavLayout";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface BreadcrumbsProps {
  homePath: string;
  navs: TNavItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ homePath, navs }) => {
  return (
    <nav className="w-full">
      <ul className="flex flex-row items-center gap-2">
        <li>
          <Link href={homePath}>
            <Icon
              icon="material-symbols-light:home-outline"
              className="hover:text-blue-600 w-5 h-5 transition-all duration-150"
            />
          </Link>
        </li>

        {navs.map((nav, index) => (
          <>
            <li>
              <span className="text-gray-300">/</span>
            </li>
            <li key={index}>
              <Link
                href={nav.path}
                className="text-sm hover:text-blue-600 transition-all duration-150"
              >
                {nav.label}
              </Link>
            </li>
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
