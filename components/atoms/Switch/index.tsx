import { useState } from "react";

interface SwitchProps {
  type: "primary" | "secondary" | "ghost";
  labels: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const Switch: React.FC<SwitchProps> = ({
  type,
  labels,
  activeIndex,
  onSelect,
}) => {
  if (type === "ghost") {
    return (
      <div className="w-full rounded-full bg-[#676767] border border-[#777777] flex flex-row items-center gap-2">
        {labels.map((label, index) => (
          <button
            className={`${
              activeIndex === index && "border border-white"
            } text-base font-semibold text-white w-1/${
              labels.length
            } rounded-full py-[6px] cursor-pointer`}
            onClick={() => onSelect(index)}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }
};

export default Switch;
