import { INavItem } from "@/types/components.types";
import Navbar from "../Navbar";
import { Button } from "@/components/atoms";
import { HeaderSearch } from "@/components/molecules";

interface HeaderProps {
  navItems: INavItem[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <header className="w-full h-[80px] flex items-center fixed top-0 bg-white z-50">
      <div className="w-[80%] mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-10">
          {/* Logo */}
          <h1 className="text-2xl font-bold">CHARLIE</h1>
          {/* Navbar */}
          <Navbar navItems={navItems} />
        </div>
        {/* Sign in & Sign up Buttons */}
        <div className="flex items-center gap-8">
          <HeaderSearch />
          <button className="text-sm cursor-pointer">Log in</button>
          <Button type="primary" label="Sign up" size="medium" />
        </div>
      </div>
    </header>
  );
};

export default Header;
