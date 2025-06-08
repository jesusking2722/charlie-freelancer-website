import { INavItem } from "@/types/components.types";
import Navbar from "../Navbar";

interface HeaderProps {
  navItems: INavItem[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <header className="w-full h-[80px] flex items-center">
      <div className="w-[80%] mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-10">
          {/* Logo */}
          <h1 className="text-2xl font-bold">CHARLIE UNICORN AI</h1>
          {/* Navbar */}
          <Navbar navItems={navItems} />
        </div>
        {/* Sign in & Sign up Buttons */}
      </div>
    </header>
  );
};

export default Header;
