import { Footer, Header } from "@/components/organisms";
import { INavItem } from "@/types/components.types";
import { FindTalent } from "./NavChildren";

const IntroLayout = ({ children }: { children: React.ReactNode }) => {
  const navItems: INavItem[] = [
    {
      label: "Find talent",
      path: "/",
      active: false,
      children: <FindTalent />,
    },
    {
      label: "Find work",
      path: "/",
      active: false,
      children: <div>Find work</div>,
    },
    {
      label: "What's new",
      path: "/",
      active: false,
      children: <div>What's new</div>,
    },
    {
      label: "Enterprise",
      path: "/",
      active: false,
    },
    {
      label: "Pricing",
      path: "/",
      active: false,
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Header navItems={navItems} />
      {children}
      <Footer />
    </div>
  );
};

export default IntroLayout;
