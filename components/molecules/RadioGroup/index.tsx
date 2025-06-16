import { Button } from "@/components/atoms";
import React, { useState } from "react";

export interface IRadioOption {
  id: string;
  label: string;
  count?: number;
  color?: "blue" | "black" | "gray";
}

interface RadioGroupProps {
  options: IRadioOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
  hiddenBtns?: boolean;
  onClear?: (value: string) => void;
  onApply?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  defaultValue,
  onChange,
  name = "radio-group",
  className = "",
  hiddenBtns,
  onClear,
  onApply,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleChange = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const getRadioStyles = (color?: string, isSelected?: boolean) => {
    const baseStyles =
      "w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer relative overflow-hidden";

    if (isSelected) {
      switch (color) {
        case "blue":
          return `${baseStyles} border-blue-600`;
        case "black":
          return `${baseStyles} border-black`;
        default:
          return `${baseStyles} border-gray-400`;
      }
    }

    return `${baseStyles} border-gray-400 group-hover:ring-2 group-hover:ring-black group-hover:border-transparent transition-all duration-150`;
  };

  const getBackgroundColor = (color?: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500";
      case "black":
        return "bg-black";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option) => {
        const isSelected = selectedValue === option.id;

        return (
          <label
            key={option.id}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative">
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={isSelected}
                onChange={() => handleChange(option.id)}
                className="sr-only"
              />
              <div className={getRadioStyles(option.color, isSelected)}>
                {/* Animated background */}
                <div
                  className={`absolute inset-1 rounded-full transition-all duration-300 ease-out ${getBackgroundColor(
                    option.color
                  )}`}
                  style={{
                    transform: isSelected ? "scale(1)" : "scale(0)",
                    opacity: isSelected ? 1 : 0,
                  }}
                />
              </div>
            </div>

            <div className="flex-1">
              <span className="text-sm">
                {option.label}
                {option.count && (
                  <span className="text-gray-600 ml-1 text-sm">
                    ({option.count.toLocaleString()})
                  </span>
                )}
              </span>
            </div>
          </label>
        );
      })}

      {/* Control Buttons */}
      {!hiddenBtns && (
        <div className="w-full flex items-center justify-between mt-6">
          <button
            className="text-blue-600 hover:text-blue-500 cursor-pointer text-sm py-[10px] px-4"
            onClick={onClear ? () => onClear(selectedValue) : undefined}
          >
            Clear
          </button>
          <Button
            type="primary"
            label="Apply"
            size="medium"
            onClick={onApply ? () => onApply(selectedValue) : undefined}
          />
        </div>
      )}
    </div>
  );
};

export default RadioGroup;
