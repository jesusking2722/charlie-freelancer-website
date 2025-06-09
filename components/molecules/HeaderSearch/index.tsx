import { Menu } from "@/components/atoms";
import { useTheme } from "@/contexts/ThemeContext";
import { TMenuItem } from "@/types/components.types";
import { Icon } from "@iconify/react";
import { useState } from "react";

const menuItems: TMenuItem[] = [
  {
    label: "Talent",
    description: "Hire professionals and agency",
    icon: "material-symbols:group-outline",
    value: "talent",
  },
  {
    label: "Projects",
    description: "Buy ready-to-start services",
    icon: "material-symbols:list-alt-check-outline",
    value: "projects",
  },
  {
    label: "Jobs",
    description: "Apply to jobs posted by client",
    icon: "material-symbols:work-outline",
    value: "jobs",
  },
];

const HeaderSearch = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<TMenuItem>(
    menuItems[0]
  );
  const [searchValue, setSearchValue] = useState<string>("");

  const { theme } = useTheme();

  return (
    <div className="relative max-w-[320px]">
      <div className="border border-gray-400 rounded-lg flex flex-row items-center justify-between py-2">
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
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          {searchValue !== "" && (
            <button
              className="p-[2px] rounded-full border border-black mr-2 cursor-pointer"
              onClick={() => setSearchValue("")}
            >
              <Icon
                icon="mdi:times"
                className="w-3 h-3"
                color={theme === "dark" ? "white" : "black"}
              />
            </button>
          )}
        </div>

        {/* Menu filter */}
        <div className="w-[120px] border-l border-l-gray-400 relative flex items-center justify-center focus:border focus:border-black focus:rounded-lg">
          <Menu
            type="vertical"
            items={menuItems}
            selectedItemValue={selectedMenuItem.value}
            onItemSelect={setSelectedMenuItem}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
