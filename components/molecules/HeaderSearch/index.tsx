import { Menu } from "@/components/atoms";
import { useTheme } from "@/contexts/ThemeContext";
import { TMenuItem } from "@/types/components.types";
import { Icon } from "@iconify/react";
import { useState } from "react";

const menuItems: TMenuItem[] = [
  {
    label: "Talent",
    description: "Hire professionals and agency",
    icon: "solar:users-group-rounded-outline",
    value: "talent",
  },
  {
    label: "Projects",
    description: "Buy ready-to-start services",
    icon: "material-symbols-light:list-alt-check-outline",
    value: "projects",
  },
  {
    label: "Jobs",
    description: "Apply to jobs posted by client",
    icon: "material-symbols-light:work",
    value: "jobs",
  },
];

const HeaderSearch = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<TMenuItem>(
    menuItems[0]
  );

  const { theme } = useTheme();

  const handleMenuItemSelect = (item: TMenuItem) => {
    setSelectedMenuItem(item);
  };

  return (
    <div className="relative max-w-[320px]">
      <div className="border border-gray-400 rounded-xl flex flex-row items-center justify-between py-2">
        {/* Search Input */}
        <div className="flex flex-row items-center gap-2 w-full pl-4">
          <Icon
            icon="mingcute:search-line"
            className="w-5 h-5"
            color={theme === "dark" ? "white" : "black"}
          />
          <input
            type="text"
            name="header-search"
            placeholder="Search"
            className={`bg-transparent w-full text-sm outline-none border-none ${
              theme === "dark"
                ? "text-white placeholder-gray-400"
                : "text-black placeholder-gray-500"
            }`}
          />

          <Icon
            icon="mdi:times"
            className="w-4 h-4"
            color={theme === "dark" ? "white" : "black"}
          />
        </div>

        {/* Menu filter */}
        <div className="w-[120px] border-l border-l-gray-400 relative flex items-center justify-center focus:border focus:border-black focus:rounded-lg">
          <Menu
            type="vertical"
            items={menuItems}
            selectedItemValue={selectedMenuItem.value}
            onItemSelect={handleMenuItemSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
